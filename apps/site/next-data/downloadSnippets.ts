import {
  ENABLE_STATIC_EXPORT,
  IS_DEVELOPMENT,
  NEXT_DATA_URL,
  VERCEL_ENV,
} from '@/next.constants.mjs';
import { availableLocaleCodes } from '@/next.locales.mjs';
import type { DownloadSnippet } from '@/types';

// Prevents React from throwing an Error when not able to fulfil a request
// due to internal processing errors
const parseDownloadSnippetResponse = (data: string): Array<DownloadSnippet> =>
  data.startsWith('{') ? JSON.parse(data) : [];

const getDownloadSnippets = (lang: string): Promise<Array<DownloadSnippet>> => {
  // Prevents attempting to retrieve data for an unsupported language as both the generator
  // and the API endpoint will simply return 404. And we want to prevent a 404 response.
  if (availableLocaleCodes.includes(lang) === false) {
    return Promise.resolve([]);
  }

  // When we're using Static Exports the Next.js Server is not running (during build-time)
  // hence the self-ingestion APIs will not be available. In this case we want to load
  // the data directly within the current thread, which will anyways be loaded only once
  // We use lazy-imports to prevent `provideBlogData` from executing on import
  if (ENABLE_STATIC_EXPORT || (!IS_DEVELOPMENT && !VERCEL_ENV)) {
    return import('@/next-data/providers/downloadSnippets').then(
      ({ default: provideDownloadSnippets }) => provideDownloadSnippets(lang)!
    );
  }

  // Applies the language to the URL, since this content is actually localized
  const LOCALIZED_NEXT_DATA = NEXT_DATA_URL.replace(
    '/en/next-data/',
    `/${lang}/next-data/`
  );

  const fetchURL = `${LOCALIZED_NEXT_DATA}download-snippets`;

  // This data cannot be cached because it is continuously updated. Caching it would lead to
  // outdated information being shown to the user.
  // Note: We do manual JSON.parse after response.text() to prevent React from throwing an Error
  // that does not provide a clear stack trace of which request is failing and what the JSON.parse error is
  return fetch(fetchURL)
    .then(response => response.text())
    .then(response => parseDownloadSnippetResponse(response));
};

export default getDownloadSnippets;
