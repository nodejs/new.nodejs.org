import type { FC } from 'react';

import ProgressionSidebarIcon from '@/components/Common/ProgressionSidebar/ProgressionSidebarIcon';
import WithActiveLink from '@/components/withActiveLink';
import type { FormattedMessage } from '@/types';

import styles from './index.module.css';

type ProgressionSidebarItemProps = {
  label: FormattedMessage;
  link: string;
};

const ProgressionSidebarItem: FC<ProgressionSidebarItemProps> = ({
  label,
  link,
}) => (
  <WithActiveLink
    className={styles.item}
    activeClassName={styles.active}
    href={link}
  >
    <ProgressionSidebarIcon />
    {label}
  </WithActiveLink>
);

export default ProgressionSidebarItem;
