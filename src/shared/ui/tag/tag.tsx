import React from 'react';
import styles from './tag.module.css';

interface TagProps {
  text?: string;
  textColor?: string;
  backgroundColor?: string;
  category?: string;
}

export const Tag: React.FC<TagProps> = ({
  text,
  textColor,
  backgroundColor,
  category
}) => {
  const getCategoryClass = () => {
    if (category) {
      switch (category) {
        case '1':
          return styles.business; // Бизнес и карьера
        case '2':
          return styles.languages; // Иностранные языки
        case '3':
          return styles.home; // Дом и уют
        case '4':
          return styles.creative; // Творчество и искусство
        case '5':
          return styles.education; // Образование и развитие
        case '6':
          return styles.health; // Здоровье и лайфстайл
        default:
          return styles.default;
      }
    }
    return styles.default;
  };

  return (
    <label
      className={`${styles.tag} ${getCategoryClass()}`}
      style={{
        color: textColor,
        backgroundColor: backgroundColor
      }}
    >
      {text}
    </label>
  );
};
