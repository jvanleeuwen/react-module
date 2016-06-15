/* @flow */

import React from 'react';

import styles from './style.css';

type Props = {
  className?: string,
  children?: any
}

export default ({ children, className }: Props) => (
  <div className={[className, styles.component].join(' ')}>
    {children}
  </div>
);
