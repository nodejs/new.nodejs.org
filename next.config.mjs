import nextra from 'nextra';

import getNextData from './next.data.mjs';

const withNextra = nextra({
  theme: 'theme.tsx',
  flexsearch: false,
  codeHighlight: false,
  mdxOptions: { format: 'detect' },
  transform: getNextData,
  transformPageOpts: pageOpts => {
    delete pageOpts.pageMap;
    delete pageOpts.headings;
    delete pageOpts.timestamp;

    return pageOpts;
  },
});

export default withNextra({
  trailingSlash: true,
  images: { unoptimized: true },
  outputFileTracing: false,
  basePath: process.env.NEXT_BASE_PATH || '',
});
