import { NextResponse } from 'next/server';

import provideWebsiteFeeds from '@/next-data/providers/websiteFeeds';
import { siteConfig } from '@/next.json.mjs';
import { defaultLocale } from '@/next.locales.mjs';

// We only support fetching these pages from the /en/ locale code
const locale = defaultLocale.code;

type StaticParams = { params: Promise<{ feed: string; locale: string }> };

// This is the Route Handler for the `GET` method which handles the request
// for the Node.js Website Blog Feeds (RSS)
// @see https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export const GET = async (_: Request, props: StaticParams) => {
  const params = await props.params;

  // Generate the Feed for the given feed type (blog, releases, etc)
  const websiteFeed = provideWebsiteFeeds(params.feed);

  return new NextResponse(websiteFeed, {
    headers: { 'Content-Type': 'application/xml' },
    status: websiteFeed ? 200 : 404,
  });
};

// This function generates the static paths that come from the dynamic segments
// `[locale]/feeds/[feed]` and returns an array of all available static paths
// This is used for ISR static validation and generation
export const generateStaticParams = async () =>
  siteConfig.rssFeeds.map(feed => ({ feed: feed.file, locale }));

// Enforces that this route is cached and static as much as possible
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-static';

// Ensures that this endpoint is invalidated and re-executed every X minutes
// so that when new deployments happen, the data is refreshed
// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 300;
