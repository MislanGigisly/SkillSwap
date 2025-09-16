import React, { FC } from 'react';
import styles from '../variants/ConfirmModal.module.css';
import { TRegisterData } from '../../../../server/types';
import EditIcon from '../../../images/edit.svg';
import { useLocation } from 'react-router-dom';
type Props = {
  onClose: () => void;
  submit: () => void;
  data: TRegisterData;
};

export const ConfirmModal: FC<Props> = ({ onClose, submit, data }) => {
  const {
    skillName,
    skillCanTeachCategory,
    skillCanTeachSubCategory,
    description,
    photos = []
  } = data;

  const location = useLocation();
  const { registerData: TRegisterData } = location.state || {};

  return (
    <div className={styles.modalWideWrapper}>
      <div className={styles.modalContent}>
        <div className={styles.modalTitle}>Ваше предложение</div>
        <div className={styles.modalSubtitle}>
          Пожалуйста, проверьте и подтвердите правильность данных
        </div>

        <div className={styles.infoRow}>
          <div className={styles.textSection}>
            <h3 className={styles.cardTitle}>{skillName}</h3>
            <div className={styles.category}>
              {skillCanTeachCategory} / {skillCanTeachSubCategory}
            </div>
            <p>{description}</p>

            <div className={styles.buttonRow}>
              <button onClick={onClose} className={styles.modalButtonOutline}>
                Редактировать
                <img src={EditIcon} alt='' className={styles.icon} />
              </button>
              <button onClick={submit} className={styles.modalButtonFilled}>
                Готово
              </button>
            </div>
          </div>

          <div className={styles.imageSection}>
            {photos[0] && (
              <img
                className={styles.mainImage}
                src={photos[0]}
                alt='Основное изображение'
              />
            )}

            {photos.length > 1 && (
              <div className={styles.thumbnails}>
                {photos.slice(1, 4).map((src, index) => {
                  const isLast = index === 2 && photos.length > 4;

                  return isLast ? (
                    <div key={index} className={styles.moreThumbs}>
                      <img src={src} alt={`Превью ${index + 1}`} />
                      <div className={styles.overlayText}>
                        +{photos.length - 4}
                      </div>
                    </div>
                  ) : (
                    <img
                      key={index}
                      src={src}
                      alt={`Превью ${index + 1}`}
                      className={styles.thumbnail}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
