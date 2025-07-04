import React from 'react';
import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate
} from 'react-router-dom';
import styles from './ServerErrorPage.module.css';
import iconError500 from './error500.png';
import iconOtherError from './otherError.png';
import { Button } from '../../shared/ui/button/button';

type ErrorType = '500' | 'otherError';

interface ErrorConfig {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

const errorConfig: Record<ErrorType, ErrorConfig> = {
  '500': {
    title: 'На сервере произошла ошибка',
    description: 'Попробуйте позже или вернитесь на главную страницу',
    icon: iconError500,
    alt: 'Ошибка 500'
  },
  otherError: {
    title: 'Произошла ошибка',
    description: 'Попробуйте позже или вернитесь на главную страницу',
    icon: iconError500,
    alt: 'Ошибка'
  }
};

export const ServerErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const determineErrorType = (): ErrorType => {
    if (isRouteErrorResponse(error)) {
      return error.status === 500 ? '500' : 'otherError';
    }
    return 'otherError';
  };

  const errorType = determineErrorType();

  const { title, description, icon, alt } = errorConfig[errorType];

  const handleGoToMain = () => {
    navigate('/');
  };

  const handleReportError = () => {
    console.log('Сообщение об ошибке отправлено');
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
