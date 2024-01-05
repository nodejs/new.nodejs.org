'use strict';

import classNames from 'classnames';
import { toString } from 'hast-util-to-string';
import { SKIP, visit } from 'unist-util-visit';

import { highlightToHast } from './util/getHighlighter';

// This is what Remark will use as prefix within a <pre> className
// to attribute the current language of the <pre> element
const languagePrefix = 'language-';

/**
 * Retrieve the value for the given meta key.
 *
 * @example - Returns "CommonJS"
 * getMetaParameter('displayName="CommonJS"', 'displayName');
 *
 * @param {any} meta - The meta parameter.
 * @param {string} key - The key to retrieve the value.
 *
 * @return {string | undefined} - The value related to the given key.
 */
function getMetaParameter(meta, key) {
  if (typeof meta !== 'string') {
    return;
  }

  const matches = meta.match(new RegExp(`${key}="(?<parameter>[^"]*)"`));
  const parameter = matches?.groups.parameter;

  return parameter !== undefined && parameter.length > 0
    ? parameter
    : undefined;
}

/**
 * @typedef {import('unist').Node} Node
 * @property {string} tagName
 * @property {Node[]} children
 */

/**
 * Checks if the given node is a valid code element.
 *
 * @param {Node} node - The node to be verified.
 *
 * @return {boolean} - True when it is a valid code element, false otherwise.
 */
function isCodeBlock(node) {
  return node?.tagName === 'pre' && node?.children[0].tagName === 'code';
}

/**
 * Retrieves a list indicating the starting, and ending indexes of sequential
 * code elements.
 *
 * @param {Node} tree - The current MDX resolved content.
 *
 * @return {{start: number, end: number}[]} - The list containing every range of
 * sequential code elements.
 */
function getCodeTabsRange(tree) {
  const rangeMap = {};
  let start = null;

  visit(tree, 'element', (node, index, parent) => {
    // Adding 2 since there is one text node between every element
    const next = index + 2;

    if (isCodeBlock(node) && isCodeBlock(parent?.children[next])) {
      start ??= index;
      rangeMap[start] = next;

      // Prevent visiting the code block children
      return SKIP;
    }

    // End of sequential code elements, reset the start for the next range
    start = null;
  });

  return Object.entries(rangeMap).map(([start, end]) => ({
    start: Number(start),
    end: Number(end),
  }));
}

export default function rehypeShikiji() {
  return async function (tree) {
    // Retrieve all sequential code boxes to transform
    const ranges = getCodeTabsRange(tree);

    if (ranges.length > 0) {
      // Make a mutable clone without reference
      const children = [...tree.children];

      for (const range of ranges) {
        // Simple tree containing the sequential code boxes among text nodes
        const slicedTree = {
          type: 'root',
          children: tree.children.slice(range.start, range.end + 1),
        };

        const languages = [];
        const displayNames = [];
        const codeTabsChildren = [];

        let defaultTab = '0';

        visit(slicedTree, 'element', node => {
          const codeElement = node.children[0];

          const displayName = getMetaParameter(
            codeElement.data?.meta,
            'displayName'
          );

          // We should get the language name from the class name
          if (codeElement.properties.className?.length) {
            const className = codeElement.properties.className.join(' ');
            const matches = className.match(/language-(?<language>.*)/);

            languages.push(matches?.groups.language ?? 'text');
          }

          // Map the display names of each variant for the CodeTab
          displayNames.push(displayName?.replaceAll('|', '') ?? '');
          codeTabsChildren.push(node);

          // If `active="true"` is provided in a CodeBox
          // then the default selected entry of the CodeTabs will be the desired entry
          const specificActive = getMetaParameter(
            codeElement.data?.meta,
            'active'
          );

          if (specificActive === 'true') {
            defaultTab = String(codeTabsChildren.length - 1);
          }

          // Prevent visiting the code block children
          return SKIP;
        });

        // Each iteration reduces the `children` length, so it needs to be
        // accounted in the following operations
        const lengthOffset = tree.children.length - children.length;
        const compensatedRange = {
          start: range.start - lengthOffset,
          end: range.end - lengthOffset,
        };

        const deleteCount = compensatedRange.end - compensatedRange.start + 1;

        // Replace the sequential code boxes with a code tabs element
        children.splice(compensatedRange.start, deleteCount, {
          type: 'element',
          tagName: 'CodeTabs',
          children: codeTabsChildren,
          properties: {
            languages: languages.join('|'),
            displayNames: displayNames.join('|'),
            defaultTab,
          },
        });
      }

      // Update the tree with the transformed children
      Object.assign(tree, { children: children });
    }

    visit(tree, 'element', (node, index, parent) => {
      // We only want to process <pre>...</pre> elements
      if (!parent || index == null || node.tagName !== 'pre') {
        return;
      }

      // We want the contents of the <pre> element, hence we attempt to get the first child
      const preElement = node.children[0];

      // If thereÄs nothing inside the <pre> element... What are we doing here?
      if (!preElement || !preElement.properties) {
        return;
      }

      // Ensure that we're not visiting a <code> element but it's inner contents
      // (keep iterating further down until we reach where we want)
      if (preElement.type !== 'element' || preElement.tagName !== 'code') {
        return;
      }

      // Get the <pre> element class names
      const preClassNames = preElement.properties.className;

      // The current classnames should be an array and it should have a length
      if (typeof preClassNames !== 'object' || preClassNames.length === 0) {
        return;
      }

      // We want to retrieve the language class name from the class names
      const codeLanguage = preClassNames.find(
        c => typeof c === 'string' && c.startsWith(languagePrefix)
      );

      // If we didn't find any `language-` classname then we shouldn't highlight
      if (typeof codeLanguage !== 'string') {
        return;
      }

      // Retrieve the whole <pre> contents as a parsed DOM string
      const preElementContents = toString(preElement);

      // Grabs the relevant alias/name of the language
      const languageId = codeLanguage.slice(languagePrefix.length);

      // Parses the <pre> contents and returns a HAST tree with the highlighted code
      const { children } = highlightToHast(preElementContents, languageId);

      // Adds the original language back to the <pre> element
      children[0].properties.class = classNames(
        children[0].properties.class,
        codeLanguage
      );

      const showCopyButton = getMetaParameter(
        preElement.data?.meta,
        'showCopyButton'
      );

      // Adds a Copy Button to the CodeBox if requested as an additional parameter
      // And avoids setting the property (overriding) if undefined or invalid value
      if (showCopyButton && ['true', 'false'].includes(showCopyButton)) {
        children[0].properties.showCopyButton = showCopyButton;
      }

      // Replaces the <pre> element with the updated one
      parent.children.splice(index, 1, ...children);
    });
  };
}
