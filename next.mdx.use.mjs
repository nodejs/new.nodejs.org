'use strict';

import Blockquote from './components/Common/Blockquote';
import Button from './components/Common/Button';
import DownloadButton from './components/Downloads/DownloadButton';
import DownloadLink from './components/Downloads/DownloadLink';
import DownloadReleasesTable from './components/Downloads/DownloadReleasesTable';
import BitnessDropdown from './components/Downloads/Release/BitnessDropdown';
import BlogPostLink from './components/Downloads/Release/BlogPostLink';
import ReleaseDownloadButton from './components/Downloads/Release/DownloadButton';
import LinkWithArrow from './components/Downloads/Release/LinkWithArrow';
import NpmLink from './components/Downloads/Release/NpmLink';
import OperatingSystemDropdown from './components/Downloads/Release/OperatingSystemDropdown';
import PlatformDropdown from './components/Downloads/Release/PlatformDropdown';
import ReleaseCodeBox from './components/Downloads/Release/ReleaseCodeBox';
import ReleaseStatus from './components/Downloads/Release/ReleaseStatus';
import ReleaseVersion from './components/Downloads/Release/ReleaseVersion';
import SourceButton from './components/Downloads/Release/SourceButton';
import VerifyingBinariesLink from './components/Downloads/Release/VerifyingBinariesLink';
import VersionDropdown from './components/Downloads/Release/VersionDropdown';
import Link from './components/Link';
import UpcomingMeetings from './components/MDX/Calendar/UpcomingMeetings';
import MDXCodeBox from './components/MDX/CodeBox';
import MDXCodeTabs from './components/MDX/CodeTabs';
import MDXImage from './components/MDX/Image';
import SearchPage from './components/MDX/SearchPage';
import WithBadge from './components/withBadge';
import WithBanner from './components/withBanner';
import WithNodeRelease from './components/withNodeRelease';

/**
 * A full list of React Components that we want to pass through to MDX
 *
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const mdxComponents = {
  DownloadReleasesTable: DownloadReleasesTable,
  // HOC for getting Node.js Release Metadata
  WithNodeRelease: WithNodeRelease,
  // HOC for providing Banner Data
  WithBanner: WithBanner,
  // HOC for providing Badge Data
  WithBadge: WithBadge,
  // Renders MDX CodeTabs
  CodeTabs: MDXCodeTabs,
  // Renders a Download Button
  DownloadButton: DownloadButton,
  // Renders a Download Link
  DownloadLink: DownloadLink,
  // Renders a Button Component for `button` tags
  Button: Button,
  // Renders a Search Page
  SearchPage: SearchPage,
  // Renders an container for Upcoming Node.js Meetings
  UpcomingMeetings: UpcomingMeetings,
  // Links with External Arrow
  LinkWithArrow: LinkWithArrow,
  // Group of components that enable you to select versions for Node.js
  // releases and download selected versions. Uses `releaseProvider` as a provider
  Release: {
    // Renders a drop-down menu from which the version can select
    VersionDropdown: VersionDropdown,
    // Renders a drop-down menu from which the platform can select
    PlatformDropdown: PlatformDropdown,
    // Renders a drop-down menu from which the bitness can select
    BitnessDropdown: BitnessDropdown,
    // Renders a drop-down menu from which the operating system can select
    OperatingSystemDropdown: OperatingSystemDropdown,
    // Renders a link to the npm version of the selected release
    NpmLink: NpmLink,
    // Renders a release version of the selected release
    Version: ReleaseVersion,
    // Renders a release status of the selected release
    Status: ReleaseStatus,
    // Renders a Blog Post Link for the selected release
    BlogPostLink: BlogPostLink,
    // Renders a Verifying Binaries Link
    VerifyingBinariesLink: VerifyingBinariesLink,
    // Renders a Download Button for the selected release
    DownloadButton: ReleaseDownloadButton,
    // Renders a Source Download Button for the selected release
    SourceButton: SourceButton,
    // Renders a Release CodeBox
    ReleaseCodeBox: ReleaseCodeBox,
  },
};

/**
 * A full list of wired HTML elements into custom React Components
 *
 * @type {import('mdx/types').MDXComponents}
 */
export const htmlComponents = {
  // Renders a Link Component for `a` tags
  a: Link,
  // Renders a Blockquote Component for `blockquote` tags
  blockquote: Blockquote,
  // Renders a CodeBox Component for `pre` tags
  pre: MDXCodeBox,
  // Renders an Image Component for `img` tags
  img: MDXImage,
};
