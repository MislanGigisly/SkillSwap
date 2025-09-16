import { FC } from 'react';
import doneIcon from '../../../images/Done.svg';
import styles from '../modal.module.css';
import React from 'react';

interface Props {
  onClose: () => void;
}

export const Created: FC<Props> = ({ onClose }) => (
  <div className={styles.modal}>
    <img src={doneIcon} alt='иконка успеха' className={styles['modal-icon']} />
    <h2 className={styles['modal-title']}>Ваше предложение создано</h2>
    <p className={styles['modal-subtitle']}>
      Теперь вы можете предложить обмен
    </p>
    <button className={styles['modal-button']} onClick={onClose}>
      Готово
    </button>
  </div>
);
