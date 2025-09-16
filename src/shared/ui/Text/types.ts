import { ReactNode } from 'react';

import { TColors } from '../types';

export const tagVariant = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  bodyText: 'p',
  caption: 'span'
} as const;

export type TTagVariant = keyof typeof tagVariant;

export interface IText {
  color: TColors;
  as?: TTagVariant;
  children: ReactNode;
}
