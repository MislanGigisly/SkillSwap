import React, { FC } from 'react';
import styles from './skillcard.module.css';
import { ToggleLike } from '@shared/ui/ToggleLike/ToggleLike';
import { Tag } from '@shared/ui/tag';
import { Button } from '@shared/ui/button/button';
import { TUserCard } from '@api';
import { useSelector } from '@app/store/store';
import { selectSkillById } from '@entities';
import { selectAllSkills } from '@entities/Skills/model/selectors';

export type TSkillCardProps = {
  data: TUserCard;
  learnSkills: string[];
  onLikeToggle?: () => void;
  isLiked?: boolean;
  onDetailsClick: () => void;
};

export const SkillCard: FC<TSkillCardProps> = ({
  data,
  learnSkills,
  onLikeToggle,
  isLiked,
  onDetailsClick
}) => {
  // Все навык
  const allSkills = useSelector(selectAllSkills);

  // Получаем навыки, которым хочет научиться
  const learnSkillsData = learnSkills.map((id) =>
    allSkills.find((value) => value._id === id)
  );

  const parentIdBySkillId = useSelector((state) =>
    selectSkillById(state, data.skillId)
  );

  const visibleSkills = learnSkillsData.slice(0, 2);
  const hiddenSkillsCount = learnSkillsData.length - visibleSkills.length;

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsHeader}>
        <div className={styles.cardsUserInfo}>
          <img
            className={`${styles.avatar} ${styles.medium}`}
            src={`/${data.avatar}`}
          />
          <div className={styles.cardText}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.description}>
              {`${data.city}, ${data.age} года`}
            </div>
          </div>
        </div>
        <div className={styles.like}>
          <ToggleLike onChange={onLikeToggle} checked={isLiked} />
        </div>
      </div>
      <div className={styles.sectionSkils}>
        <div className={styles.cardSkils}>
          <div className={styles.learnSkils}>Может научить:</div>
          <div>
            <Tag
              text={data.skillName}
              category={parentIdBySkillId?.parent_id}
            />
          </div>
        </div>
        <div className={styles.cardSkils}>
          <div className={styles.teachSkils}>Хочет научиться:</div>
          <div className={styles.tegSkils}>
            {visibleSkills.map((skill, index) => (
              <Tag key={index} text={skill?.name} category={skill?.parent_id} />
            ))}
            {hiddenSkillsCount > 0 && <Tag text={`+${hiddenSkillsCount}`} />}
          </div>
        </div>
      </div>
      <Button onClick={onDetailsClick} type='button'>
        Подробнее
      </Button>
    </div>
  );
};
