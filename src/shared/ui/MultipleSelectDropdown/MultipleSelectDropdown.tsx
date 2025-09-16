import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Text } from '../Text/Text';
import { MultipleSelectDropdownProps } from './types';
import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowUp from '../../assets/icons/arrow-up.svg';
import styles from './MultipleSelectDropdown.module.css';
import { Checkbox } from '../Checkbox/Checkbox';

export const MultipleSelectDropdown = React.memo(
  ({ values, label, placeholder, onChange }: MultipleSelectDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => {
      setIsOpen((previous) => !previous);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      const handleEscPress = (event: KeyboardEvent) => {
        if (event.key == 'Escape') {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscPress);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscPress);
      }
    }, [isOpen]);

    useEffect(() => {
      if (onChange) {
        onChange(selected);
      }
    }, [selected]);

    const handleItemClick = (value: string) => {
      setSelected((previous) => {
        const newSelected = previous.includes(value)
          ? previous.filter((item) => item !== value)
          : [...previous, value];

        return newSelected;
      });
    };

    return (
      <div className={clsx(styles.multipleSelectDropdown)} ref={dropdownRef}>
        <Text color='text'>{label}</Text>
        <div
          className={styles.content}
          style={{ zIndex: isOpen ? 9999 : undefined }}
        >
          <div
            className={styles.controls}
            onClick={toggleOpen}
            style={{
              borderBlockEnd: isOpen ? '1px solid var(--disabled)' : undefined
            }}
          >
            <div className={styles.button}>
              <Text color={selected.length ? 'text' : 'caption'}>
                {!selected.length ? placeholder : `Выбрано: ${selected.length}`}
              </Text>
            </div>
            <img
              src={isOpen ? arrowUp : arrowDown}
              alt={isOpen ? 'стрелка вверх' : 'стрелка вниз'}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
          {isOpen && (
            <ul className={styles.selectMenu}>
              {values.map((el, index) => (
                <li
                  key={index}
                  className={styles.selectItem}
                  onClick={() => {
                    handleItemClick(el);
                  }}
                >
                  {selected.includes(el) ? (
                    <Checkbox checked onChange={(checked) => {}} />
                  ) : (
                    <Checkbox checked={false} onChange={(checked) => {}} />
                  )}
                  <Text color={selected.includes(el) ? 'text-link' : 'text'}>
                    {el}
                  </Text>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.values === nextProps.values
);
