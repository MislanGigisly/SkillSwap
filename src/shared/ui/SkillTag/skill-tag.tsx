import React from 'react';
import styles from './skill-tag.module.css';
import CloseIcon from '../../../images/cross.svg';

interface SkillTagProps {
  skill: string;
  onClose: () => void;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, onClose }) => (
  <div className={styles.skillTag}>
    <span>{skill}</span>
    <button
      className={styles.closeButton}
      onClick={onClose}
      aria-label='Закрыть плашку'
    >
      <img src={CloseIcon} alt='Закрыть' className={styles.closeIcon} />
    </button>
  </div>
);

export default SkillTag;
