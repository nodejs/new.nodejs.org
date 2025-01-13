import { CodeBracketIcon } from '@heroicons/react/24/outline';
import type { Meta as MetaObj, StoryObj } from '@storybook/react';

import MetaBar from '@/components/Containers/MetaBar';
import GitHub from '@/components/Icons/Social/GitHub';
import Link from '@/components/Link';
import WithAvatarGroup from '@/components/withAvatarGroup';

type Story = StoryObj<typeof MetaBar>;
type Meta = MetaObj<typeof MetaBar>;

const names = [
  'ovflowd',
  'bmuenzenmeyer',
  'AugustinMauroy',
  'HinataKah0',
  'Harkunwar',
  'rodion-arr',
  'mikeesto',
  'bnb',
  'benhalverson',
  'aymen94',
  'shanpriyan',
  'Wai-Dung',
  'manishprivet',
  'araujogui',
];

export const Default: Story = {
  args: {
    items: {
      'components.metabar.lastUpdated': new Date(
        '17 October 2023'
      ).toLocaleDateString(),
      'components.metabar.readingTime': '15 minutes',
      'components.metabar.addedIn': 'v1.0.0',
      'components.metabar.author': 'The Node.js Project',
      'components.metabar.authors': (
        <WithAvatarGroup usernames={names} limit={6} />
      ),
      'components.metabar.contribute': (
        <>
          <GitHub className="fill-neutral-700 dark:fill-neutral-100" />
          <Link href="/contribute">Edit this page</Link>
        </>
      ),
      'components.metabar.viewAs': (
        <>
          <CodeBracketIcon />
          <Link href="/json">JSON</Link>
        </>
      ),
    },
    headings: {
      items: [
        {
          value: 'OpenSSL update assessment, and Node.js project plans',
          depth: 1,
          data: { id: 'heading-1' },
        },
        {
          value: 'Summary',
          depth: 2,
          data: { id: 'summary' },
        },
        {
          value: 'Analysis',
          depth: 2,
          data: { id: 'analysis' },
        },
        {
          value: 'The c_rehash script allows command injection (CVE-2022-2068)',
          depth: 3,
          data: { id: 'the_c_rehash' },
        },
        {
          value: 'Contact and future updates',
          depth: 3,
          data: { id: 'contact_and_future_updates' },
        },
        {
          value: 'Email',
          depth: 4,
          data: { id: 'email' },
        },
        {
          value: 'Slack',
          depth: 4,
          data: { id: 'slack' },
        },
        {
          value: '#node-website',
          depth: 5, // h5s do not get shown
          data: { id: 'node-website' },
        },
      ],
    },
  },
};

export default { component: MetaBar } as Meta;
