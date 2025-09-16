import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import { useClickOutside, useFilteredValues } from '@shared/hooks';

import { Text } from '../Text/Text';
import { ISearchableSelect } from './types';

import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowUp from '../../assets/icons/arrow-up.svg';
import cross from '../../assets/icons/cross.svg';

import styles from './SearchableSelect.module.css';

export const SearchableSelect = React.memo(
  ({
    values,
    onChange,
    defaultValue = '',
    placeholder = 'Не указан',
    selectedColor = 'button-pressed'
  }: ISearchableSelect) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState(defaultValue);
    const [selected, setSelected] = useState(defaultValue);
    const parentElement = useRef<HTMLDivElement>(null);

    useClickOutside(parentElement, () => {
      setIsOpen(false);
      setSearch(selected ? selected : '');
    });

    useEffect(() => {
      if (isOpen && parentElement.current) {
        const input = parentElement.current.querySelector('input');
        input?.focus();
      }
    }, [isOpen]);

    const handleItemClick = (value: string) => {
      setSearch(value);
      onChange(value);
      setSelected(value);
      setIsOpen(false);
    };
    const filtredValues = useFilteredValues(values, search);

    return (
      <div className={clsx(styles.searchSelect)} ref={parentElement}>
        <div
          className={styles.content}
          style={{ zIndex: isOpen ? 9999 : undefined }}
        >
          <div
            className={styles.controls}
            style={{
              borderBlockEnd: isOpen ? '1px solid var(--disabled)' : undefined
            }}
          >
            <input
              type='text'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder={placeholder}
              className={styles.searchInput}
              onClick={() => {
                setIsOpen(true);
              }}
            />
            {!search.length || !isOpen ? (
              <img
                src={isOpen ? arrowUp : arrowDown}
                alt={isOpen ? 'стрелка вверх' : 'стрелка вниз'}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
            ) : (
              <img
                src={cross}
                alt='удалить текст'
                onClick={() => {
                  setSearch('');
                }}
              />
            )}
          </div>

          {isOpen && (
            <ul className={styles.selectMenu}>
              {filtredValues.length ? (
                filtredValues.map((value) => (
                  <li
                    key={value}
                    className={styles.selectItem}
                    role='option'
                    aria-selected={selected === value}
                    onClick={() => {
                      handleItemClick(value);
                    }}
                  >
                    {
                      <Text
                        as='bodyText'
                        color={selected === value ? selectedColor : 'text'}
                      >
                        {value}
                      </Text>
                    }
                  </li>
                ))
              ) : (
                <li className={styles.notFound}>
                  <Text as='bodyText' color='text'>
                    Ничего не найдено
                  </Text>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.onChange === nextProps.onChange &&
    prevProps.values === nextProps.values
);
