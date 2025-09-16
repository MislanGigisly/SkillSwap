import React, { useState } from 'react';
import styles from './Checkbox.module.css';
import { iconSizes, TColors, TSize } from '../types';

type CheckboxProps = {
  onChange: (value: boolean) => void;
  checked: boolean;
  color?: TColors;
  activeColor?: TColors;
  size?: TSize;
};

export const Checkbox = (props: CheckboxProps) => {
  const {
    onChange,
    color = 'default-icon',
    activeColor = 'accent-icon',
    size = 'medium',
    checked = false
  } = props;

  const iconSize = iconSizes[size];

  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <button
      type='button'
      className={`${styles.checkboxContainer}`}
      onClick={handleChange}
    >
      {!checked ? (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.20898 2.5H14.791C17.259 2.50005 18.9008 3.0297 19.9355 4.06445C20.9703 5.09921 21.5 6.74098 21.5 9.20898V14.791C21.5 17.259 20.9703 18.9008 19.9355 19.9355C18.9008 20.9703 17.259 21.5 14.791 21.5H9.20898C6.74098 21.5 5.09921 20.9703 4.06445 19.9355C3.0297 18.9008 2.50005 17.259 2.5 14.791V9.20898C2.50005 6.74098 3.0297 5.09921 4.06445 4.06445C5.09921 3.0297 6.74098 2.50005 9.20898 2.5ZM9.20898 2.89551C7.02968 2.89555 5.40359 3.27805 4.34082 4.34082C3.27805 5.40359 2.89555 7.02968 2.89551 9.20898V14.791C2.89554 16.9703 3.27805 18.5964 4.34082 19.6592C5.40359 20.7219 7.02968 21.1045 9.20898 21.1045H14.791C16.9703 21.1045 18.5964 20.7219 19.6592 19.6592C20.7219 18.5964 21.1045 16.9703 21.1045 14.791V9.20898C21.1045 7.02968 20.7219 5.40359 19.6592 4.34082C18.5964 3.27805 16.9703 2.89554 14.791 2.89551H9.20898Z'
            fill={`var(--${color})`}
            stroke={`var(--${color})`}
          />
        </svg>
      ) : (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14.791 2C19.8418 2.00009 21.9999 4.15815 22 9.20898V14.791C21.9999 19.8418 19.8418 21.9999 14.791 22H9.20898C4.15815 21.9999 2.00009 19.8418 2 14.791V9.20898C2.00009 4.15816 4.15816 2.00009 9.20898 2H14.791ZM16.7803 8.62988C16.4903 8.33988 16.0097 8.33988 15.7197 8.62988L10.5801 13.7695L8.28027 11.4697C7.99028 11.1797 7.50973 11.1797 7.21973 11.4697C6.92973 11.7597 6.92973 12.2403 7.21973 12.5303L10.0498 15.3604C10.1898 15.5003 10.3801 15.5801 10.5801 15.5801C10.78 15.58 10.9704 15.5003 11.1104 15.3604L16.7803 9.69043C17.0702 9.40047 17.0702 8.9199 16.7803 8.62988Z'
            fill={`var(--${activeColor})`}
          />
        </svg>
      )}
    </button>
  );
};
