import React from 'react';
import styles from './notification-item.module.css';
import LightbulbIcon from '../../assets/icons/idea.svg';
import ClearIcon from '../../assets/icons/cross.svg';

import type { TColors } from '../types';

interface NotificationItemProps {
  text: string;
  backgroundColor?: TColors;
  textColor?: TColors;
  onClose: () => void;
  onAction?: () => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  text,
  backgroundColor = 'button-hover',
  textColor = 'text',
  onClose,
  onAction
}) => (
  <div
    className={styles.notificationItem}
    style={{
      backgroundColor: `var(--${backgroundColor})`,
      color: `var(--${textColor})`
    }}
  >
    <div className={styles.iconContainer}>
      <img src={LightbulbIcon} alt='Иконка лампочки' className={styles.icon} />
    </div>
    <span className={styles.text}>{text}</span>
    <button
      className={styles.closeButton}
      onClick={onClose}
      aria-label='Закрыть уведомление'
    >
      <img src={ClearIcon} alt='Закрыть' className={styles.closeIcon} />
    </button>
    {onAction && (
      <button
        className={styles.actionButton}
        onClick={onAction}
        aria-label='Перейти'
      >
        Перейти
      </button>
    )}
  </div>
);

export default NotificationItem;
