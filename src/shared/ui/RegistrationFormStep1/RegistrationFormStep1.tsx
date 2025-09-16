import React, { useState, useCallback } from 'react';
import { Button } from '@shared/ui/button/button';
import styles from './RegistrationFormStep1.module.css';
import { ToggleVisibility } from '../ToggleVisibility/ToggleVisibility';
import Google from '../../assets/icons/Google.svg';
import Apple from '../../assets/icons/Apple.svg';
import { TRegisterData } from '@api/types';

interface RegistrationFormStep1Props {
  onNextStep: (data: TRegisterData) => void;
  formData: TRegisterData;
  setFormData: (data: TRegisterData) => void;
}

const RegistrationFormStep1: React.FC<RegistrationFormStep1Props> = ({
  onNextStep,
  formData,
  setFormData
}) => {
  // ------------- Состояния ---------------
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [setFormData, formData]
  );
  const handleSubmit = useCallback(() => {
    onNextStep(formData);
  }, [onNextStep, formData]);

  // Разбираемся с паролем
  const handleToggleVisibility = useCallback(
    (isVisible: boolean) => {
      setPasswordVisible(isVisible);
    },
    [setPasswordVisible]
  );

  // Проверяем, заполнены ли обязательные поля. Я не успею сделать нормальную валидацию
  const isFormValid =
    formData.email && formData.password && formData.password.length >= 8;

  return (
    <form
      className={styles.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
        if (isFormValid) {
          handleSubmit();
        }
      }}
    >
      <button type='button' className={styles.socialButton}>
        <div className={styles.buttonDescriptionContainer}>
          <img src={Google} alt='Иконка Google' className={styles.googleIcon} />
          <div>Продолжить с Google</div>
        </div>
      </button>
      <button type='button' className={styles.socialButton}>
        <div className={styles.buttonDescriptionContainer}>
          <img src={Apple} alt='Иконка Apple' className={styles.appleIcon} />
          <div>Продолжить с Apple</div>
        </div>
      </button>

      <div className={styles.orContainer}>
        <div className={styles.line} />
        <span>или</span>
        <div className={styles.line} />
      </div>

      <div className={styles.emailContainer}>
        <label htmlFor='email' className={styles.label}>
          Email
        </label>
        <input
          type='email'
          placeholder='Введите email'
          name='email'
          value={formData.email || ''}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>

      <div className={styles.passwordContainer}>
        <label htmlFor='password' className={styles.label}>
          Пароль
        </label>
        <div className={styles.passwordInputContainer}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder='Придумайте надёжный пароль'
            name='password'
            value={formData.password || ''}
            onChange={handleInputChange}
            className={styles.input}
          />
          <div className={styles.visibilityButton}>
            <ToggleVisibility
              onChange={handleToggleVisibility}
              checked={passwordVisible}
            />
          </div>
        </div>
      </div>

      <p className={styles.passwordRequirements}>
        Пароль должен содержать не менее 8 знаков
      </p>

      <Button
        type='submit'
        variant='primary'
        size='large'
        children='Далее'
        disabled={!isFormValid}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default RegistrationFormStep1;
