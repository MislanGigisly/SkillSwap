import React from 'react';
import './passwordString.css';
import eye from '../../../images/eye.svg';

interface SecureInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  isHidden: boolean;
  onToggleVisibility: () => void;

  isTouched: boolean;
  color?: string;
  error?: string;
}

export const SecureInput: React.FC<SecureInputProps> = ({
  placeholder,
  value,
  onChange,
  isHidden,
  onToggleVisibility,
  isTouched,
  color = '#2d3723',
  error = 'Пароль должен содержать не менее 8 латинских букв'
}) => {
  const isValid = /^[a-zA-Z]{8,}$/.test(value);
  const showError = isTouched && !isValid;

  return (
    <div className='input-wrapper'>
      <label className='input-label'>Пароль</label>
      <div className={`input-container ${showError ? 'error' : ''}`}>
        <input
          type={isHidden ? 'password' : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ color }}
        />
        <button
          type='button'
          className='toggle-button'
          onClick={onToggleVisibility}
          aria-label='Скрыть/показать пароль'
        >
          <img src={eye} alt='Показать/скрыть пароль' />
        </button>
      </div>
      <div className={`error-text ${showError ? 'visible' : ''}`}>{error}</div>
    </div>
  );
};
