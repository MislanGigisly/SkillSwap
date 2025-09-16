import React, { FC, useState } from 'react';
import styles from './Header.module.css';
import SkillSwapLogo from '@shared/assets/icons/Logo.svg';
import Arrow from '@shared/assets/icons/arrow-down.svg';
import { Link } from 'react-router-dom';
import SearchBar from '@shared/ui/SearchBar/search-bar';
import { Button } from '@shared/ui/button/button';
import { TSkill, TUserCard } from '@api';
import { Notification } from '@shared/ui/Notification/Notification';
import { ToggleLike } from '@shared/ui/ToggleLike/ToggleLike';
import MoonIcon from '@shared/ui/MoonIcon/MoonIcon';
import ClearIcon from '@shared/assets/icons/cross.svg';
import { selectIsUserAuth, selectUser } from '@entities/User';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CatalogueNavUI } from '@shared/ui/Catalogue';
import { selectAllSkills } from '@entities/Skills';
import NotificationItem from '@shared/ui/NotificationItem/notification-item';
interface HeaderProps {
  isLoggedIn: boolean;
  data?: TUserCard | null;
  isFormOpen?: boolean;
  onCloseForm?: () => void;
}

export const Header: FC<HeaderProps> = ({
  isLoggedIn,
  data,
  isFormOpen = false,
  onCloseForm = () => {}
}) => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsUserAuth);
  const userDataFromStore = useSelector(selectUser);
  const localUser = localStorage.getItem('user');
  const parsedUser: TUserCard | null = localUser ? JSON.parse(localUser) : null;
  const loggedIn = isAuth || !!parsedUser;
  const userData = userDataFromStore || parsedUser;
  const allSkills = useSelector(selectAllSkills);

  // Состояние для уведомлений
  const [hasUnreadNotifications, setHasUnreadNotifications] =
    useState<boolean>(true);

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Состояние для лайков
  const [isLiked, setIsLiked] = useState(false);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  // Для поиска
  const handleSearchSubmit = (searchText: string) => {};

  // Обработчик для компонента Notification
  const handleNotificationToggle = (value: boolean) => {
    setHasUnreadNotifications(value);
  };

  // Обработчик для лайкп
  const onLikeToggle = (value: boolean) => {
    setIsLiked(value);
  };


  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
    if (!isNotificationOpen) {
      setHasUnreadNotifications(false);
    }
  };
  // Обработчик клика по кнопке "Все навыки"
  const handleAllSkillsClick = () => {
    setIsCatalogueOpen(!isCatalogueOpen);
  };

  // Закрытие каталога при клике вне его области
  const handleCloseCatalogue = () => {
    setIsCatalogueOpen(false);
  };

  if (isFormOpen) {
    return (
      <header className={`${styles.header} ${styles.headerFormOpen}`}>
        <div className={styles.leftSection}>
          <Link to='/'>
            <img
              src={SkillSwapLogo}
              alt='SkillSwap Logo'
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.rightSection}>
          <Button variant='secondary' size='medium' onClick={onCloseForm}>
            Закрыть
            <img src={ClearIcon} alt='Close' className={styles.clearIcon} />
          </Button>
        </div>
      </header>
    );
  }
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Link to='/'>
          <img
            src={SkillSwapLogo}
            alt='SkillSwap Logo'
            className={styles.logo}
          />
        </Link>
        <button className={styles.aboutProjectButton}>О проекте</button>
        <div className={styles.allSkillsContainer}>
          <button
            className={styles.allSkillsButton}
            onClick={handleAllSkillsClick}
          >
            Все навыки
            <span className={styles.dropdownArrow}>
              <img
                src={Arrow}
                alt='Arrow'
                className={isCatalogueOpen ? styles.arrowUp : styles.arrowDown}
              />
            </span>
          </button>
          {isCatalogueOpen && (
            <div className={styles.catalogueDropdown}>
              <CatalogueNavUI data={allSkills} />
            </div>
          )}
        </div>
      </div>

      <div className={styles.centerSection}>
        <SearchBar
          placeholder='Искать навык'
          submit={handleSearchSubmit}
          size='medium'
        />
      </div>

      <div className={styles.rightSection}>
        <MoonIcon />
        {loggedIn ? (
          <>
            <Notification
              checked={hasUnreadNotifications}
              onChange={handleNotificationClick}
            />
            {isNotificationOpen && (
              <div className={styles.notificationsDropdown}>
                <NotificationItem
                  text='Новое уведомление'
                  onClose={() => {
                    setIsNotificationOpen(false);
                  }}
                />
              </div>
            )}
            <div className={styles.like}>
              <ToggleLike onChange={onLikeToggle} checked={isLiked} />
            </div>
            <Link to='/profile' className={styles.userProfile}>
              {userData && (
                <span className={styles.userName}>{userData?.name}</span>
              )}
              {userData && (
                <div
                  className={styles.userAvatar}
                  style={{
                    backgroundImage: `url(./images/${userData?.avatar})`
                  }}
                />
              )}
            </Link>
          </>
        ) : (
          <div className={styles.buttonContainer}>
            <Link to='/login'>
              <Button
                variant='secondary'
                size='medium'
                onClick={() => {
                  navigate('/register');
                }}
              >
                Войти
              </Button>
            </Link>
            <Link to='/register'>
              <Button
                variant='primary'
                size='medium'
                onClick={() => {
                  navigate('/register');
                }}
              >
                Зарегистрироваться
              </Button>
            </Link>
          </div>
        )}
      </div>
      {isCatalogueOpen && (
        <div
          className={styles.catalogueOverlay}
          onClick={handleCloseCatalogue}
        />
      )}
    </header>
  );
};
