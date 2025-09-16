import { FC } from 'react';
import UserCircle from '../../../images/user-circle.svg';
import styles from '../modal.module.css';
import React from 'react';

interface Props {
  onClose: () => void;
  onRegister: () => void;
}

export const NeedRegister: FC<Props> = ({ onClose, onRegister }) => (
  <div className={styles.modal}>
    <img
      src={UserCircle}
      alt='иконка пользователя'
      className={styles['modal-icon']}
    />
    <h2 className={styles['modal-title']}>Создание обмена</h2>
    <p className={styles['modal-subtitle']}>
      Для создания обмена нужна регистрация
    </p>

    <button className={styles['modal-button']} onClick={onRegister}>
      Зарегистрироваться
    </button>
  </div>
);
