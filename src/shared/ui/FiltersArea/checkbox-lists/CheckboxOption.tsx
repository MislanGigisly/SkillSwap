import styles from './CheckboxList.module.css';
import React from 'react';
import { useRef } from 'react';
import { Text } from '../../Text/Text';

export type CheckboxListOptionType = {
  value: string;
  className?: string;
  optionClassName?: string;
};

type CheckboxListOptionProps = {
  value: CheckboxListOptionType['value'];
  selected: string[];
  groupName: string;
  onChange?: (option: CheckboxListOptionType) => void;
  option: CheckboxListOptionType;
  checkboxClass?: string;
  onClick?: () => void;
};

export const CheckboxOption = (props: CheckboxListOptionProps) => {
  const {
    value,
    selected,
    groupName,
    onChange,
    option,
    checkboxClass,
    onClick
  } = props;

  const optionRef = useRef<HTMLDivElement>(null);

  const handleChange = () => onChange?.(option);

  const inputId = `${groupName}_checkbox_item_with_value__${value}`;
  const isChecked = selected.includes(value);

  return (
    <div
      className={styles.item}
      key={value}
      data-checked={isChecked}
      data-testid={inputId}
      tabIndex={0}
      ref={optionRef}
    >
      <input
        className={checkboxClass}
        type='checkbox'
        name={groupName}
        id={inputId}
        value={value}
        onChange={handleChange}
        tabIndex={-1}
      />
      <label className={styles.label} htmlFor={inputId} onClick={onClick}>
        <Text as='bodyText' color='text'>
          {value}
        </Text>
      </label>
    </div>
  );
};
