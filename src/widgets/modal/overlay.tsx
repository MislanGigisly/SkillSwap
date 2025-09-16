import { FC } from 'react';
import styles from './modal.module.css';
import React from 'react';

interface OverlayProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Overlay: FC<OverlayProps> = ({ children, onClick }) => (
  <div className={styles.overlay} onClick={onClick}>
    {children}
  </div>
);
