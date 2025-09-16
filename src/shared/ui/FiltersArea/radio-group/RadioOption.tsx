import { useRef } from 'react';
import styles from './RadioGroup.module.css';
import React from 'react';
import { Text } from '../../Text/Text';
import { Radio } from '../../Radio/Radio';

export type RadioOptionType = {
  value: string;
  className?: string;
  optionClassName?: string;
};

type RadioOptionProps = {
  value: RadioOptionType['value'];
  selected: string;
  groupName: string;
  onChange?: (option: RadioOptionType) => void;
  option: RadioOptionType;
  radioBtnClass?: string;
};

export const RadioOption = (props: RadioOptionProps) => {
  const { value, selected, groupName, onChange, option, radioBtnClass } = props;

  const optionRef = useRef<HTMLDivElement>(null);

  const handleChange = () => onChange?.(option);

  const inputId = `${groupName}_radio_item_with_value__${value}`;
  const isChecked = value === selected;

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
        className={radioBtnClass}
        type='radio'
        name={groupName}
        id={inputId}
        value={value}
        onChange={handleChange}
        tabIndex={-1}
      />
      <label className={styles.label} htmlFor={inputId} onClick={handleChange}>
        <Text as='bodyText' color='text'>
          {value}
        </Text>
      </label>
    </div>
  );
};
