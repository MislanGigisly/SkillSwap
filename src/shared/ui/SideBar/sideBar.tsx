import React from 'react';
import RequestsIcon from '../../../images/request.svg';
import TradesIcon from '../../../images/message-text.svg';
import FavoritesIcon from '../../../images/like.svg';
import SkillsIcon from '../../../images/idea.svg';
import PersonalIcon from '../../../images/user.svg';
import styles from './sideBar.module.css';

type Tab = 'requests' | 'trades' | 'favorites' | 'skills' | 'personal';

interface TTabs {
  activeTab: Tab;
  onChangeTab: (tab: Tab) => void;
}

const SideBar: React.FC<TTabs> = ({ activeTab, onChangeTab }) => (
  <div className={styles.switchesContainer}>
    <div className={styles.listSwitches}>
      <button
        className={
          activeTab === 'requests'
            ? `${styles.listSwitchItem} ${styles.activeSwitch}`
            : styles.listSwitchItem
        }
        onClick={() => onChangeTab('requests')}
      >
        <img
          src={RequestsIcon}
          alt='Requests Icon'
          className={styles.switchLogo}
        />
        <span className={styles.switchSpan}>Заявки</span>
      </button>
      <button
        className={
          activeTab === 'trades'
            ? `${styles.listSwitchItem} ${styles.activeSwitch}`
            : styles.listSwitchItem
        }
        onClick={() => onChangeTab('trades')}
      >
        <img src={TradesIcon} alt='Trades Icon' className={styles.switchLogo} />
        <span className={styles.switchSpan}>Мои обмены</span>
      </button>
      <button
        className={
          activeTab === 'favorites'
            ? `${styles.listSwitchItem} ${styles.activeSwitch}`
            : styles.listSwitchItem
        }
        onClick={() => onChangeTab('favorites')}
      >
        <img
          src={FavoritesIcon}
          alt='Favorites Icon'
          className={styles.switchLogo}
        />
        <span className={styles.switchSpan}>Избранное</span>
      </button>
      <button
        className={
          activeTab === 'skills'
            ? `${styles.listSwitchItem} ${styles.activeSwitch}`
            : styles.listSwitchItem
        }
        onClick={() => onChangeTab('skills')}
      >
        <img src={SkillsIcon} alt='Skills Icon' className={styles.switchLogo} />
        <span className={styles.switchSpan}>Мои навыки</span>
      </button>
      <button
        className={
          activeTab === 'personal'
            ? `${styles.listSwitchItem} ${styles.activeSwitch}`
            : styles.listSwitchItem
        }
        onClick={() => onChangeTab('personal')}
      >
        <img
          src={PersonalIcon}
          alt='Personal Icon'
          className={styles.switchLogo}
        />
        <span className={styles.switchSpan}>Личные данные</span>
      </button>
    </div>
  </div>
);

export default SideBar;
