import type { Heading } from '@vcarl/remark-headings';
import { Fragment, useMemo } from 'react';
import type { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import LocalizedLink from '@/components/LocalizedLink';

import styles from './index.module.css';

type MetaBarProps = {
  items: Record<string, React.ReactNode>;
  headings?: {
    items: Heading[];
    depth?: number;
  };
};

const MetaBar: FC<MetaBarProps> = ({ items, headings }) => {
  // The default depth of headings to display in the table of contents.
  const { depth = 2, items: headingItems = [] } = headings || {};

  const heading = useMemo(
    () => headingItems.filter(head => head.depth === depth),
    [depth, headingItems]
  );

  return (
    <div className={styles.wrapper}>
      <dl>
        {Object.entries(items).map(([key, value]) => (
          <Fragment key={key}>
            <dt>
              <FormattedMessage id={key} />
            </dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
        {heading.length > 0 && (
          <Fragment key="tableOfContents">
            <dt>
              <FormattedMessage id="components.metabar.tableOfContents" />
            </dt>
            <dd>
              <ol>
                {heading.map(head => (
                  <li key={head.value}>
                    <LocalizedLink href={`#${head?.data?.id || head.value}`}>
                      {head.value}
                    </LocalizedLink>
                  </li>
                ))}
              </ol>
            </dd>
          </Fragment>
        )}
      </dl>
    </div>
  );
};

export default MetaBar;
