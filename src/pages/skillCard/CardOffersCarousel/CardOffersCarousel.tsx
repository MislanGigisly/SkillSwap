import { FC, useRef, useState, useEffect } from 'react';
import styles from './CardOffersCarousel.module.css';
import { SkillCard } from '../../../features/skillcard/skillcard';
import { TUserCard } from '@api/types';
import { useNavigate } from 'react-router-dom';

interface CardOffersCarouselProps {
  users: TUserCard[];
  likedUsers?: boolean;
  learnSkills: string[];
  onLikeToggle: (userId: string) => void;
}

export const CardOffersCarousel: FC<CardOffersCarouselProps> = ({
  users,
  likedUsers,
  learnSkills,
  onLikeToggle
}) => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const carousel = carouselRef.current;
    carousel?.addEventListener('scroll', checkScrollPosition);
    return () => carousel?.removeEventListener('scroll', checkScrollPosition);
  }, [users]);

  const handleCarouselScroll = (direction: 'next' | 'prev') => {
    if (!carouselRef.current) return;

    const containerWidth = carouselRef.current.clientWidth;
    const scrollAmount = containerWidth;

    carouselRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.cardCarousel} ref={carouselRef}>
        {users.map((user: TUserCard, index: number) => (
          <div key={index} className={styles.cardWrapper}>
            <SkillCard
              data={user}
              learnSkills={learnSkills}
              onLikeToggle={() => onLikeToggle(user._id)}
              isLiked={likedUsers}
              onDetailsClick={() => navigate(`/skill/${user._id}`)}
            />
          </div>
        ))}
      </div>

      {showLeftArrow && (
        <button
          className={styles.carouselArrowLeft}
          onClick={() => handleCarouselScroll('prev')}
        >
          {'<'}
        </button>
      )}

      {showRightArrow && (
        <button
          className={styles.carouselArrowRight}
          onClick={() => handleCarouselScroll('next')}
        >
          {'>'}
        </button>
      )}
    </div>
  );
};
