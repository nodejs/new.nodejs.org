import classNames from 'classnames';
import type { FC, AnchorHTMLAttributes } from 'react';

import type { LinkLike } from '@node-core/ui-components/types';

import styles from './index.module.css';

export type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  kind?: 'neutral' | 'primary' | 'secondary' | 'special';
  size?: 'default' | 'small';
  // We have an extra `disabled` prop as we simulate a button
  disabled?: boolean;
  Wrapper: LinkLike;
};

const Button: FC<ButtonProps> = ({
  kind = 'primary',
  size = 'default',
  disabled = false,
  href = undefined,
  children,
  className,
  Wrapper = 'a',
  ...props
}) => (
  <Wrapper
    role="button"
    href={disabled ? undefined : href}
    aria-disabled={disabled}
    className={classNames(styles.button, styles[kind], styles[size], className)}
    {...props}
  >
    {children}
  </Wrapper>
);

export default Button;
