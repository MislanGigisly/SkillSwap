import { FC } from 'react';
import { SkillCard } from '@features';
import { FiltersArea } from '@shared/ui/FiltersArea';
import styles from './home.module.css';
import { TUser, TSkill } from '@api';
import { useState, useEffect } from 'react';
import { getUserCardsApi, getSkillsApi, TUserCard } from '@api';
import { selectIsUserAuth, selectUser, userThunk } from '@entities';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from '@app/store/store';
import { selectUserCards } from '../../entities/UserCards/model/selectors';
import { userCardsThunk } from '../../entities/UserCards/model/thunk';
import { Text } from '@shared/ui';
export const Home: FC = () => {
  const navigate = useNavigate();
  const disp = useDispatch();
  const cards = useSelector(selectUserCards);
  const skils = useSelector(selectUser);
  const userAuto = useSelector(selectIsUserAuth);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';

  const filteredCards = query
    ? cards.filter(
        (card) =>
          card.skillName.toLowerCase().includes(query) ||
          card.name.toLowerCase().includes(query)
      )
    : cards;

  // Функция переключения лайка
  const handleLikeToggle = (id: string) => {
    if (!userAuto) {
      navigate('/register');
      return;
    }

    const isLiked = skils!.favorites.includes(id);
    if (isLiked) {
      disp(userThunk.deleteLike(id));
    } else {
      disp(userThunk.putLike(id));
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <FiltersArea />
      </div>
      <div className={styles.cardsContainer}>
        {filteredCards.length === 0 && (
          <Text color='text' as='h2'>
            Ничего не найдено
          </Text>
        )}
        {filteredCards.map((card: TUserCard, index: number) => (
          <SkillCard
            key={index}
            data={card}
            learnSkills={card.skillWants}
            onLikeToggle={() => handleLikeToggle(card._id)}
            isLiked={skils?.favorites.includes(card._id)}
            onDetailsClick={() => navigate(`/skill/${card._id}`)}
          />
        ))}
      </div>
    </div>
  );
};
