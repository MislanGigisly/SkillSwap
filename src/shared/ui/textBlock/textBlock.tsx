import {
  FC,
  useState,
  useEffect,
  ChangeEvent,
  useRef,
  useLayoutEffect
} from 'react';
import styles from './textBlock.module.css';
import React from 'react';

type Props = {
  value?: string;
  maxLength?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
};

export const TextBlock = ({
  value = '',
  maxLength = 500,
  onChange,
  className = ''
}: Props) => {
  const [isEdit, setEdit] = useState(false);

  const taRef = useRef<HTMLTextAreaElement>(null);

  const autoGrow = () => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  useEffect(() => {
    if (isEdit) {
      autoGrow();
    }
  }, [value, isEdit]);

  const startEdit = () => setEdit(true);
  const stopEdit = () => setEdit(false);

  const root = [styles.wrapper, className].join(' ').trim();

  return (
    <div className={root} onClick={isEdit ? undefined : startEdit}>
      {isEdit ? (
        <textarea
          ref={taRef}
          className={styles.textarea}
          value={value}
          onChange={onChange}
          onBlur={stopEdit}
          onFocus={autoGrow}
          maxLength={500}
          autoFocus
        />
      ) : (
        <>
          <p className={styles.text}>
            {value || 'Нажмите, чтобы добавить текст'}
          </p>
          <button
            type='button'
            className={styles.editLogo}
            aria-label='Редактировать'
            onClick={startEdit}
          />
        </>
      )}
    </div>
  );
};
