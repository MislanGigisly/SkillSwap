import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css';
import Logo from '@shared/ui/Logo/Logo';
import { HIDDEN_FOOTER_ROUTES } from './type';

export const Footer: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  const shouldHide = HIDDEN_FOOTER_ROUTES.includes(location.pathname);
  const isTouchDevice =
    'ontouchstart' in window || navigator.maxTouchPoints > 0;

  useEffect(() => {
    if (shouldHide) {
      setIsVisible(false);
      return;
    }

    if (!isTouchDevice) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setIsVisible(atBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldHide, isTouchDevice]);

  if (shouldHide) {
    return null;
  }

  return (
    <footer
      className={`${styles.footer} ${!isVisible ? styles.footerHidden : ''}`}
    >
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.column}>
          <a href='#' className={`${styles.link} ${styles.linkMarker}`}>
            О проекте
          </a>
          <a href='#' className={`${styles.link} ${styles.linkMarker}`}>
            Все навыки
          </a>
        </div>
        <div className={styles.column}>
          <a href='#' className={styles.link}>
            Контакты
          </a>
          <a href='#' className={styles.link}>
            Блог
          </a>
        </div>
        <div className={styles.column}>
          <a href='#' className={styles.link}>
            Политика конфиденциальности
          </a>
          <a href='#' className={styles.link}>
            Пользовательское соглашение
          </a>
        </div>
      </div>
      <div className={styles.copyright}>SkillSwap — 2025</div>
    </footer>
  );
};

export default Footer;
