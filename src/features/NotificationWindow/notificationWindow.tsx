import React, { FC } from 'react';
import styles from './notificationWindow.module.css';
import { TNotification } from '@api';
import { Button } from '@shared/ui/button/button';
import LightbulbIcon from '../../images/idea.svg';

export type TNotificationWindow = {
  newNotifications: TNotification[];
  oldNotifucations: TNotification[];
  readAllButton: () => void;
  clearAllButton: () => void;
};

export const NotificationWindow: FC<TNotificationWindow> = ({
  newNotifications = [],
  oldNotifucations = [],
  readAllButton,
  clearAllButton
}) => {
  const today = new Date();

  const isSameDay = (dateStr: string) => {
    const date = new Date(dateStr);
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  };
  const isYesterday = (dateStr: string) => {
    const date = new Date(dateStr);
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    return (
      date.getFullYear() === yesterday.getFullYear() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getDate() === yesterday.getDate()
    );
  };
  const getDateLabel = (dateStr: string) => {
    if (isSameDay(dateStr)) return 'сегодня';
    if (isYesterday(dateStr)) return 'вчера';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
  };

  return (
    <div className={styles.notificationWindow}>
      <div className={styles.notifications}>
        <div className={styles.notificationTitleBlock}>
          <h2 className={styles.notificationTypeTitle}>Новые уведомления</h2>
          <button
            className={styles.notificationTitleButton}
            onClick={readAllButton}
          >
            Прочитать все
          </button>
        </div>
        <div className={styles.notificationCard}>
          {newNotifications.length != 0 ? (
            newNotifications.map((notification, key) => (
              <div className={styles.notification} key={key}>
                <div className={styles.notificationGeneral} key={key}>
                  <img
                    src={LightbulbIcon}
                    alt='Иконка лампочки'
                    className={styles.notificationIcon}
                  />
                  <div className={styles.notificationInfo}>
                    <span className={styles.notificationUsernameSpan}>
                      {notification.username} {notification.notificationType}
                    </span>
                    <span className={styles.notificationTypeSpan}>
                      {notification.notificationType === 'принял ваш обмен'
                        ? 'Перейдите в профиль, чтобы обсудить детали'
                        : 'Примите обмен, чтобы обсудить детали'}
                    </span>
                  </div>
                  <div className={styles.notificationDate}>
                    {getDateLabel(notification.date)}
                  </div>
                </div>
                <div>
                  <Button onClick={readAllButton} size='large' type='button'>
                    Перейти
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.notificationText}>Уведомлений нет</div>
          )}
        </div>
      </div>
      <div className={styles.notifications}>
        <div className={styles.notificationTitleBlock}>
          <h2 className={styles.notificationTypeTitle}>Просмотренные</h2>
          <button
            className={styles.notificationTitleButton}
            onClick={clearAllButton}
          >
            Очистить
          </button>
        </div>
        <div className={styles.notificationCard}>
          {oldNotifucations.length != 0 ? (
            oldNotifucations.map((notification, key) => (
              <div className={styles.notification} key={key}>
                <div className={styles.notificationGeneral}>
                  <img
                    src={LightbulbIcon}
                    alt='Иконка лампочки'
                    className={styles.notificationIcon}
                  />
                  <div className={styles.notificationInfo}>
                    <span className={styles.notificationUsernameSpan}>
                      {notification.username} {notification.notificationType}
                    </span>
                    <span className={styles.notificationTypeSpan}>
                      {notification.notificationType === 'принял ваш обмен'
                        ? 'Перейдите в профиль, чтобы обсудить детали'
                        : 'Примите обмен, чтобы обсудить детали'}
                    </span>
                  </div>
                  <div className={styles.notificationDate}>
                    {getDateLabel(notification.date)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.notificationText}>
              Прочитанных уведомлений нет
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
