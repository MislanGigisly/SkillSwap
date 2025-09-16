import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export type TInputProfileProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  name?: string;
  required?: boolean;
  pattern?: string;
};
