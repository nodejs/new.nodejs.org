import provideReleaseData from '@/next-data/providers/releaseData';
import { defaultLocale } from '@/next.locales.mjs';

// We only support fetching these pages from the /en/ locale code
const locale = defaultLocale.code;

// This is the Route Handler for the `GET` method which handles the request
// for generating static data related to the Node.js Release Data
// @see https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export const GET = async () => {
  const releaseData = await provideReleaseData();

  return Response.json(releaseData);
};

// This function generates the static paths that come from the dynamic segments
// `[locale]/next-data/release-data/` and returns an array of all available static paths
// This is used for ISR static validation and generation
export const generateStaticParams = async () => [{ locale }];

// Forces that only the paths from `generateStaticParams` are allowed, giving 404 on the contrary
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
export const dynamicParams = false;

// Enforces that this route is used as static rendering
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'error';
