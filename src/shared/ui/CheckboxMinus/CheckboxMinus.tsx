import React, { useState } from 'react';
import styles from './CheckboxMinus.module.css';
import { iconSizes, TColors, TSize } from '../types';

type CheckboxMinusProps = {
  onChange: (value: boolean) => void;
  checked: boolean;
  color?: TColors;
  activeColor?: string;
  size?: TSize;
};

export const CheckboxMinus = (props: CheckboxMinusProps) => {
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
    <button className={`${styles.checkboxContainer}`} onClick={handleChange}>
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
            d='M14.791 2C19.8418 2.00009 21.9999 4.15815 22 9.20898V14.791C21.9999 19.8418 19.8418 21.9999 14.791 22H9.20898C4.15815 21.9999 2.00009 19.8418 2 14.791V9.20898C2.00009 4.15816 4.15816 2.00009 9.20898 2H14.791ZM8 11.25C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25H8Z'
            fill={`var(--${activeColor})`}
          />
        </svg>
      )}
    </button>
  );
};
