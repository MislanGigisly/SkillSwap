import React, { useEffect, useState, FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './likedCard.module.css';
import { useSelector, useDispatch } from '@app/store/store';
import { selectUserFavorites, selectUser, userThunk } from '@entities';
import { SkillCard } from '@features';
import { selectUserCards } from '../../entities/UserCards/model/selectors';
import { TUserCard } from '@api';

export const LikedCard: FC = () => {
  const navigate = useNavigate();
  const favorites = useSelector(selectUserFavorites);

  const allCards = useSelector(selectUserCards);

  const favoriteCards = allCards.filter((card) =>
    favorites?.includes(card._id)
  );
  const skils = useSelector(selectUser);

  // if (loading) return <p>Загрузка...</p>;
  // if (error) return <p>{error}</p>;

  const disp = useDispatch();
  const handleLikeToggle = (id: string) => {
    const isLiked = skils!.favorites.includes(id);
    if (isLiked) {
      disp(userThunk.deleteLike(id));
    } else {
      disp(userThunk.putLike(id));
    }
  };
  if (favorites?.length === 0) return <p>Нет избранных карточек</p>;
  return (
    <div className={styles.cardsContainer}>
      {favoriteCards.map((card: TUserCard, index: number) => (
        <SkillCard
          key={index}
          data={card}
          learnSkills={card.skillWants}
          onLikeToggle={() => handleLikeToggle(card._id)}
          isLiked
          onDetailsClick={() => navigate(`/skill/${card._id}`)}
        />
      ))}
    </div>
  );
};
