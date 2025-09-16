import React from 'react';
import styles from './registration-description.module.css';
import BulbIcon from '../../assets/icons/light-bulb.svg';
import UserIcon from '../../assets/icons/user-info.svg';
import SchoolIcon from '../../assets/icons/school-board.svg';
import { Text } from '../Text/Text';

interface RegistrationDescriptionProps {
  step: number;
}

const RegistrationDescription: React.FC<RegistrationDescriptionProps> = ({
  step
}) => {
  const stepsContent = [
    {
      icon: BulbIcon,
      title: 'Добро пожаловать в SkillSwap!',
      description:
        'Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками с другими людьми'
    },
    {
      icon: UserIcon,
      title: 'Расскажите немного о себе',
      description:
        'Это поможет другим людям лучше вас узнать, чтобы выбрать для обмена'
    },
    {
      icon: SchoolIcon,
      title: 'Укажите, чем вы готовы поделиться',
      description:
        'Так другие люди смогут увидеть ваши предложения и предложить вам обмен!'
    }
  ];

  const { icon: Icon, title, description } = stepsContent[step - 1];

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.iconContainer}>
        <img src={Icon} alt='Картинка' className={styles.icon} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>
          <Text as='h2' color='text'>
            {title}
          </Text>
        </div>
        <div className={styles.description}>
          <Text as='bodyText' color='text'>
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default RegistrationDescription;
