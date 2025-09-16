import React, { useMemo } from 'react';
import styles from './RegistrationFormStep3.module.css';
import { Button } from '@shared/ui/button/button';
import { SearchableSelect } from '../SearchableSelect/SearchableSelect';
import galleryAdd from '../../assets/icons/gallery-add.svg';
import { TRegisterData } from '@api/types';
import { userThunk } from '@entities/User';
// Стор
import { useDispatch, useSelector } from '@app/store/store';
import { selectAllSkills } from '@entities/Skills/model/selectors';
import { useNavigate } from 'react-router-dom';
import {
  selectExchangeRequest,
  selectSuccessModal,
  selectUserCardError,
  selectUserCards,
  selectUserLoading
} from '@entities/UserCards/model/selectors';
import {
  resetSuccessModal,
  selectIsUserAuth,
  selectUser,
  userCardsThunk
} from '@entities';

interface RegistrationFormStep3Props {
  onNextStep: () => void;
  onPrevStep: () => void;
  formData: TRegisterData;
  setFormData: (data: TRegisterData) => void;
}

export const RegistrationFormStep3: React.FC<RegistrationFormStep3Props> = ({
  onNextStep,
  onPrevStep,
  formData,
  setFormData
}) => {
  const exchangeLoading = useSelector(selectUserLoading);
  const exchangeRequestStatus = useSelector(selectExchangeRequest);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allSkills = useSelector(selectAllSkills);

  // Получаем подкатегории по выбранной категории
  // const subCategoriesList = useSelector(
  //   selectSubcategoriesByCategory(selectedCategory || '')
  // );

  // Список топ-уровневых категорий
  const topLevelCategories = allSkills.filter((item) => item.parent_id === '0');

  const subCategoriesList = useMemo(
    () =>
      allSkills.filter(
        (skill) => skill.parent_id === formData.skillCanTeachCategory
      ),
    [formData.skillCanTeachCategory]
  );

  // Загрузка навыков при монтировании

  // Установка начальных значений после загрузки allSkills

  // Очистка подкатегории при изменении категории или подкатегорий

  // Логика отправки формы
  const handleSubmit = () => {
    dispatch(userThunk.register(formData));
  };

  const isFormValid = Boolean(
    formData.skillName &&
      formData.skillCanTeachCategory &&
      formData.skillCanTeachSubCategory &&
      formData.description
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData({ ...formData, photos: filesArray });
    }
  };

  const handleExchangeRequest = () => {
    if (!localStorage.getItem('email')) {
      navigate('/register');
      return;
    }

    if (exchangeRequestStatus) return;

    dispatch(userCardsThunk.exchangeRequest());
  };

  return (
    <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
      {/* Название навыка */}
      <div className={styles.inputContainer}>
        <label htmlFor='skillName' className={styles.label}>
          Название навыка
        </label>
        <input
          id='skillName'
          type='text'
          value={formData.skillName || ''}
          placeholder='Введите название вашего навыка'
          onChange={(e) => {
            setFormData({ ...formData, skillName: e.target.value });
          }}
          className={styles.input}
        />
      </div>

      {/* Категория навыка */}
      <div className={styles.inputContainer}>
        <label className={styles.label}>Категория навыка</label>
        <SearchableSelect
          values={topLevelCategories.map((cat) => cat.name)}
          onChange={(value) => {
            const skillCanTeachCategoryId = allSkills.find(
              (skill) => skill.name === value
            )?._id;
            skillCanTeachCategoryId &&
              setFormData({
                ...formData,
                skillCanTeachCategory: skillCanTeachCategoryId
              });
          }}
          placeholder='Выберите категорию навыка'
        />
      </div>

      {/* Подкатегория навыка */}
      <div className={styles.inputContainer}>
        <label className={styles.label}>Подкатегория навыка</label>
        <SearchableSelect
          values={subCategoriesList.map((skill) => skill.name)}
          onChange={(value) => {
            const skillCanTeachSubCategoryiD = allSkills.find(
              (skill) => skill.name === value
            )?._id;
            skillCanTeachSubCategoryiD &&
              setFormData({
                ...formData,
                skillCanTeachSubCategory: skillCanTeachSubCategoryiD
              });
          }}
          placeholder='Выберите подкатегорию навыка'
        />
      </div>

      {/* Описание навыка */}
      <div className={styles.inputContainer}>
        <label className={styles.label}>Описание</label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
          placeholder='Коротко опишите, чему можете научить'
          className={styles.textarea}
        />
      </div>

      {/* Фото навыка */}
      <div className={styles.inputContainer}>
        <label className={styles.label}>Фото навыка</label>
        <div className={styles.fileInputWrapper}>
          <label htmlFor='photos'>
            Перетащите или выберите изображения навыка
            <div className={styles.gallerySkillContainer}>
              <img src={galleryAdd} alt='Загрузить аватар' />
              <div className={styles.fileInputLabel}>Выбрать изображения</div>
            </div>
          </label>
          <input
            type='file'
            id='photos'
            multiple
            accept='image/*'
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>

      {/* Кнопки */}
      <div className={styles.buttonContainer}>
        <Button
          variant='secondary'
          size='large'
          children='Назад'
          onClick={() => {
            onPrevStep();
          }}
        />

        <Button
          variant='primary'
          size='large'
          onClick={handleExchangeRequest}
          type='button'
          disabled={exchangeRequestStatus || exchangeLoading || !isFormValid}
        >
          {exchangeLoading ? 'Отправка...' : 'Продолжить'}
        </Button>
      </div>
    </form>
  );
};

export default RegistrationFormStep3;
