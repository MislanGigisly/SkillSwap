import React, { useState } from 'react';
import SideBar from '../../shared/ui/SideBar/sideBar';
import { RequestsContent } from './RequestsContent';
import { TradesContent } from './TradesContent';
import { FavoritesContent } from './FavoritesContent';
import { SkillsContent } from './SkillsContent';
import { PersonalContent } from './PersonalContent';
import styles from './profile.module.css';
import { ProfileSettingsForm } from '@features';
type Tab = 'requests' | 'trades' | 'favorites' | 'skills' | 'personal';

export const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('requests');

  const handleChangeTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'requests':
        return <RequestsContent />;
      case 'trades':
        return <TradesContent />;
      case 'favorites':
        return <FavoritesContent />;
      case 'skills':
        return <SkillsContent />;
      case 'personal':
        return <ProfileSettingsForm />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.profilePageContainer}>
      <SideBar activeTab={activeTab} onChangeTab={handleChangeTab} />
      <div className={styles.profileContainer}>{renderContent()}</div>
    </div>
  );
};

export default ProfilePage;
