import { RadioOption } from './RadioOption';
import { Text } from '../../Text/Text';
import type { RadioOptionType } from './RadioOption';
import styles from './RadioGroup.module.css';
import React from 'react';
import clsx from 'clsx';

export type RadioGroupProps = {
  name: string;
  options: RadioOptionType[];
  selected: string;
  onChange?: (value: string) => void;
  title: string;
};

export const RadioGroup = (props: RadioGroupProps) => {
  const { name, options, selected, onChange, title } = props;

  const handleChange = (value: string) => onChange?.(value);

  return (
    <div className={styles.container}>
      <div className={styles.radioTitle}>
        {title && (
          <>
            <Text as='h3' color='text'>
              {title}
            </Text>
          </>
        )}
      </div>
      <div className={styles.group}>
        {options.map((option) => (
          <RadioOption
            key={option.value}
            groupName={name}
            value={option.value}
            selected={selected}
            onChange={() => handleChange(option.value)}
            option={option}
            radioBtnClass={clsx(styles.radioBtnClass)}
          />
        ))}
      </div>
    </div>
  );
};
