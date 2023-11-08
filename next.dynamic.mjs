'use strict';

import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join, normalize, sep } from 'node:path';

import matter from 'gray-matter';
import { cache } from 'react';
import { VFile } from 'vfile';

import {
  DYNAMIC_GENERATED_ROUTES,
  DYNAMIC_ROUTES_IGNORES,
  DYNAMIC_ROUTES_REWRITES,
  MD_EXTENSION_REGEX,
  STATIC_ROUTES_IGNORES,
  DEFAULT_METADATA,
  BASE_URL,
  BASE_PATH,
} from './next.constants.mjs';
import { getMarkdownFiles } from './next.helpers.mjs';
import { siteConfig } from './next.json.mjs';
import { availableLocaleCodes, defaultLocale } from './next.locales.mjs';
import { compileMDX } from './next.mdx.compiler.mjs';

// This is the combination of the Application Base URL and Base PATH
const baseUrlAndPath = `${BASE_URL}${BASE_PATH}`;

// This is a small utility that allows us to quickly separate locale from the remaning pathname
const getPathname = (path = []) => path.join('/');

// This tests if the current pathname matches any expression that belongs
// to the list of ignored routes and if it does we return `true` to indicate that
const shouldIgnoreRoute = pathname =>
  pathname.length > 0 && DYNAMIC_ROUTES_IGNORES.some(e => e.test(pathname));

// This tests if the current pathname matches any sort of rewrite rule
// and if it does we return a the replacement expression for the pathname
const getRouteRewrite = pathname =>
  (pathname.length > 0 &&
    DYNAMIC_ROUTES_REWRITES.find(([e]) => e.test(pathname))) ||
  [];

// This maps a pathname into an actual route object that can be used
// we use a platform-specific separator to split the pathname
// since we're using filepaths here and not URL paths
const mapPathToRoute = (locale = defaultLocale.code, path = '') => ({
  locale,
  path: path.split(sep),
});

const getDynamicRouter = async () => {
  const cachedMarkdownFiles = new Map();
  const pathnameToFilename = new Map();

  const websitePages = await getMarkdownFiles(
    process.cwd(),
    `pages/${defaultLocale.code}`
  );

  websitePages.forEach(filename => {
    let pathname = filename.replace(MD_EXTENSION_REGEX, '');

    if (pathname.length > 1 && pathname.endsWith(sep)) {
      pathname = pathname.substring(0, pathname.length - 1);
    }

    pathname = normalize(pathname).replace('.', '');

    // We map the pathname to the filename to be able to quickly
    // resolve the filename for a given pathname
    pathnameToFilename.set(pathname, filename);
  });

  /**
   * This method returns a list of all routes that exist for a given locale
   *
   * @param {string} locale
   * @returns {string[]}
   */
  const getRoutesByLanguage = async (locale = defaultLocale.code) => {
    const shouldIgnoreStaticRoute = pathname =>
      STATIC_ROUTES_IGNORES.every(e => !e({ pathname, locale }));

    return [...pathnameToFilename.keys()]
      .filter(shouldIgnoreStaticRoute)
      .concat(DYNAMIC_GENERATED_ROUTES);
  };

  /**
   * This method attempts to retrieve either a localized Markdown file
   * or the English version of the Markdown file if no localized version exists
   * and then returns the contents of the file and the name of the file (not the path)
   *
   * @param {string} locale
   * @param {string} pathname
   * @returns {Promise<{ source: string; filename: string }>}
   */
  const _getMarkdownFile = async (locale = '', pathname = '') => {
    const normalizedPathname = normalize(pathname).replace('.', '');

    // This verifies if the given pathname actually exists on our Map
    // meaning that the route exists on the website and can be rendered
    if (pathnameToFilename.has(normalizedPathname)) {
      const filename = pathnameToFilename.get(normalizedPathname);

      let filePath = join(process.cwd(), 'pages');

      // We verify if our Markdown cache already has a cache entry for a localized
      // version of this file, because if not, it means that either
      // we did not cache this file yet or there is no localized version of this file
      if (cachedMarkdownFiles.has(`${locale}${normalizedPathname}`)) {
        const fileContent = cachedMarkdownFiles.get(
          `${locale}${normalizedPathname}`
        );

        return { source: fileContent, filename };
      }

      // No cache hit exists, so we check if the localized file actually
      // exists within our file system and if it does we set it on the cache
      // and return the current fetched result; If the file does not exist
      // we fallback to the English source
      if (existsSync(join(filePath, locale, filename))) {
        filePath = join(filePath, locale, filename);

        const fileContent = await readFile(filePath, 'utf8');

        cachedMarkdownFiles.set(`${locale}${normalizedPathname}`, fileContent);

        return { source: fileContent, filename };
      }

      // We then attempt to retrieve the source version of the file as there is no localised version
      // of the file and we set it on the cache to prevent future checks of the same locale for this file
      const { source: fileContent } = getMarkdownFile(
        defaultLocale.code,
        pathname
      );

      // We set the source file on the localized cache to prevent future checks
      // of the same locale for this file and improve read performance
      cachedMarkdownFiles.set(`${locale}${normalizedPathname}`, fileContent);

      return { source: fileContent, filename };
    }

    return { filename: '', source: '' };
  };

  // Creates a Cached Version of the Markdown File Resolver
  const getMarkdownFile = cache(async (locale, pathname) => {
    return await _getMarkdownFile(locale, pathname);
  });

  /**
   * This method runs the MDX compiler on the server-side and returns the
   * parsed JSX ready to be rendered on a page as a React Component
   *
   * @param {string} source
   * @param {string} filename
   */
  const _getMDXContent = async (source = '', filename = '') => {
    // We create a VFile (Virtual File) to be able to access some contextual
    // data post serialization (compilation) of the source Markdown into MDX
    const sourceAsVirtualFile = new VFile(source);

    // Gets the file extension of the file, to determine which parser and plugins to use
    const fileExtension = filename.endsWith('.mdx') ? 'mdx' : 'md';

    // This compiles our MDX source (VFile) into a final MDX-parsed VFile
    // that then is passed as a string to the MDXProvider which will run the MDX Code
    return compileMDX(sourceAsVirtualFile, fileExtension);
  };

  // Creates a Cached Version of the MDX Compiler
  const getMDXContent = cache(async (source, filename) => {
    return await _getMDXContent(source, filename);
  });

  /**
   * This method generates the Next.js App Router Metadata
   * that can be used for each page to provide metadata
   *
   * @param {string} locale
   * @param {string} path
   * @returns {import('next').Metadata}
   */
  const _getPageMetadata = async (locale = defaultLocale.code, path = '') => {
    const pageMetadata = { ...DEFAULT_METADATA };

    const { source = '' } = await getMarkdownFile(locale, path);

    const { data } = matter(source);

    pageMetadata.title = data.title
      ? `${data.title} | ${siteConfig.title}`
      : siteConfig.title;

    pageMetadata.twitter.title = pageMetadata.title;
    pageMetadata.alternates.canonical = `${baseUrlAndPath}/${locale}/${path}`;

    pageMetadata.alternates.languages[
      'x-default'
    ] = `${baseUrlAndPath}/${defaultLocale.code}/${path}`;

    availableLocaleCodes.forEach(currentLocale => {
      pageMetadata.alternates.languages[
        currentLocale
      ] = `${baseUrlAndPath}/${currentLocale}/${path}`;
    });

    return pageMetadata;
  };

  // Creates a Cached Version of the Page Metadata Context
  const getPageMetadata = cache(async (locale, path) => {
    return await _getPageMetadata(locale, path);
  });

  return {
    getRoutesByLanguage,
    getMarkdownFile,
    getMDXContent,
    getPathname,
    shouldIgnoreRoute,
    getRouteRewrite,
    mapPathToRoute,
    getPageMetadata,
  };
};

export const dynamicRouter = await getDynamicRouter();
