import classNames from 'classnames';
import Image from 'next/image';
import type { CSSProperties, ComponentProps, FC, ReactNode } from 'react';

import { BASE_PATH } from '@/next.constants.mjs';

import styles from './index.module.css';

type PreviewProps = {
  type?: 'announcement' | 'release' | 'vulnerability';
  title: ReactNode;
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
} & Omit<ComponentProps<'div'>, 'children'>;

const Preview: FC<PreviewProps> = ({
  type = 'announcement',
  title,
  height = 630,
  width = 1200,
  ...props
}) => (
  <div
    {...props}
    style={{ width, height, ...props.style }}
    className={classNames(styles.root, styles[type], props.className)}
  >
    <div className={styles.container}>
      <Image
        className={styles.logo}
        priority
        width="71"
        height="80"
        src={`${BASE_PATH}/static/images/logos/js-white.svg`}
        alt="Node.js"
      />
      <h2>{title}</h2>
    </div>
  </div>
);

export default Preview;
