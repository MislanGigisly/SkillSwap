import React, { useState } from 'react';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const getThumbnails = () => {
    const otherImages = images.filter(
      (_, index) => index !== currentImageIndex
    );
    const thumbnails = otherImages.slice(0, 2);

    if (otherImages.length > 2) {
      thumbnails.push(otherImages[otherImages.length - 1]);
      return {
        thumbnails,
        showCounter: true,
        counterValue: otherImages.length - 2
      };
    }

    return {
      thumbnails: otherImages.slice(0, 3),
      showCounter: false,
      counterValue: 0
    };
  };

  const { thumbnails, showCounter, counterValue } = getThumbnails();

  return (
    <div className={styles.carousel}>
      <div className={styles.mainImageContainer}>
        {images.length > 1 && (
          <>
            <button
              className={styles.carouselArrowLeft}
              onClick={() => handleImageChange('prev')}
            >
              {'<'}
            </button>
            <button
              className={styles.carouselArrowRight}
              onClick={() => handleImageChange('next')}
            >
              {'>'}
            </button>
          </>
        )}
        <img
          className={styles.mainImage}
          src={images[currentImageIndex]}
          alt={`Photo ${currentImageIndex + 1}`}
        />
      </div>

      {images.length > 1 && (
        <div className={styles.thumbnailsColumn}>
          {thumbnails.map((image, index) => {
            const originalIndex = images.findIndex((img) => img === image);
            const isCounter = showCounter && index === 2;

            return (
              <div
                key={originalIndex}
                className={`${styles.thumbnailContainer} ${isCounter ? styles.remainingCounter : ''}`}
                onClick={() =>
                  !isCounter && handleThumbnailClick(originalIndex)
                }
              >
                <img
                  src={image}
                  alt={
                    isCounter ? 'More photos' : `Thumbnail ${originalIndex + 1}`
                  }
                  className={styles.thumbnail}
                />
                {isCounter && (
                  <div className={styles.counterOverlay}>+{counterValue}</div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
