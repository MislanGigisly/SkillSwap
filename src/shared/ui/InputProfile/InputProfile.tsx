import React, { useState } from 'react';

import { TInputProfileProps } from './types';
import editPen from '../../../images/edit.svg';
import styles from './InputProfile.module.css';

export const InputProfile = ({
  value,
  onChange,
  type = 'text',
  placeholder = '',
  name,
  required = false,
  pattern
}: TInputProfileProps) => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        value={value}
        type={type}
        onChange={(event) => {
          onChange(event);
        }}
        placeholder={placeholder}
        name={name && name}
        disabled={isDisabled}
        required={required}
        pattern={pattern}
      />
      <img
        src={editPen}
        alt='редактировать ввод'
        className={styles.editPen}
        onClick={() => {
          setIsDisabled(!isDisabled);
        }}
      />
    </div>
  );
};
