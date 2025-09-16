import React from 'react';

import { tagVariant, IText } from './types';

import styles from './Text.module.css';

export const Text = ({ color, as = 'bodyText', children }: IText) => {
  const Tag = tagVariant[as];

  return (
    <Tag className={styles[as]} style={{ color: `var(--${color})` }}>
      {children}
    </Tag>
  );
};
