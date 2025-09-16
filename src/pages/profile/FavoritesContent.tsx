import React from 'react';
import styles from './profile.module.css';
import { LikedCard } from '@widgets';
export const FavoritesContent: React.FC = () => (
  <div className={styles.contentContainer}>
    <LikedCard />
  </div>
);
