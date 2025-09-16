import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Text } from '../Text/Text';
import { SingleSelectDropdownProps } from './types';
import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowUp from '../../assets/icons/arrow-up.svg';
import styles from './SingleSelectDropdown.module.css';

export const SingleSelectDropdown = React.memo(
  ({
    values,
    label,
    placeholder,
    selectedValue
  }: SingleSelectDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(
      selectedValue ? selectedValue : placeholder
    );

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

    const handleItemClick = (value: string) => {
      setSelected(value);
    };

    return (
      <div className={clsx(styles.singleSelectDropdown)} ref={dropdownRef}>
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
              <Text color={selected !== placeholder ? 'text' : 'caption'}>
                {!selected ? placeholder : selected}
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
                  <Text color={selected === el ? 'text-link' : 'text'}>
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
