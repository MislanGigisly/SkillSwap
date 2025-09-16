import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './not-fount-404.module.css';
import iconError404 from './error404.png';
import { Button } from '../../shared/ui/button/button';

type ErrorType = '404';

interface ErrorConfig {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

const errorConfig: Record<ErrorType, ErrorConfig> = {
  '404': {
    title: 'Страница не найдена',
    description:
      'К сожалению, эта страница недоступна. Вернитесь на главную страницу или попробуйте позже',
    icon: iconError404,
    alt: 'Ошибка 404'
  }
};

export const NotFound404: FC = () => {
  const { title, description, icon, alt } = errorConfig['404'];
  const navigate = useNavigate();

  const handleGoToMain = () => {
    navigate('/');
  };

  const handleReportError = () => {
    console.log('Спасибо! Мы уже работаем над исправлением.');
  };

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContent}>
        <img src={icon} alt={alt} className={styles.errorImage} />
        <h1 className={styles.errorTitle}>{title}</h1>
        <p className={styles.errorDescription}>{description}</p>
        <div className={styles.errorActions}>
          <Button size='large' variant='secondary' onClick={handleReportError}>
            Сообщить об ошибке
          </Button>
          <Button size='large' variant='primary' onClick={handleGoToMain}>
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
};
