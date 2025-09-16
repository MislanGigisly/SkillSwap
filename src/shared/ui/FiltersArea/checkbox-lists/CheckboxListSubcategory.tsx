import React from 'react';
import styles from './CheckboxList.module.css';
import { CheckboxOption } from './CheckboxOption';
import type { CheckboxListOptionType } from './CheckboxOption';
import { useState } from 'react';
import clsx from 'clsx';

type CheckboxListProps = {
  name: string;
  options: CheckboxListOptionType[];
  selected: string[];
  onChange?: (value: string) => void;
  isSubcategory?: boolean;
  checkboxClass?: string;
  onClick?: () => void;
};

export const CheckboxListSubcategory = (props: CheckboxListProps) => {
  const { name, options, selected, onChange, checkboxClass, onClick } = props;

  const [selectedOptions, setselectedOptions] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setselectedOptions((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
    return onChange?.(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        {options.map((option) => (
          <CheckboxOption
            key={option.value}
            groupName={name}
            value={option.value}
            selected={selectedOptions}
            onChange={() => handleChange(option.value)}
            option={option}
            checkboxClass={clsx(styles.checkboxSubcategory)}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};
