import React from 'react';
import styles from './Logo.module.css';
import logoIcon from './logo.png';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => (
  <Link to='/' className={styles.logo}>
    <img className={styles.logoIcon} src={logoIcon} alt='SkillSwap Logo' />
    <span className={styles.logoName}>SkillSwap</span>
  </Link>
);

export default Logo;
