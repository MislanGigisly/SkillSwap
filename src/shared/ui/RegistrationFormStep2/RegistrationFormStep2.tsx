import React, { FC, useState, useMemo } from 'react';
import styles from './RegistrationFormStep2.module.css';
import { Button } from '@shared/ui/button/button';
import { SearchableSelect } from '../SearchableSelect/SearchableSelect';
import { InputDateUI } from '../InputDate/InputDate';
import iconAdd from '../../assets/icons/Icon+Add.svg';
import { cities, gender } from './constants';
import { MultipleSelectDropdown } from '../../ui/MultipleSelectDropdown/MultipleSelectDropdown';
import { useSelector } from '@app/store/store';
import {
  selectAllSkills,
  selectSubcategoriesByCategory
} from '@entities/Skills/model/selectors';
import { TRegisterData } from '@api/types';

interface RegistrationFormStep2Props {
  onNextStep: () => void;
  onPrevStep: () => void;
  formData: TRegisterData;
  setFormData: (data: TRegisterData) => void;
}

const RegistrationFormStep2: FC<RegistrationFormStep2Props> = ({
  onNextStep,
  onPrevStep,
  formData,
  setFormData
}) => {
  const allSkills = useSelector(selectAllSkills);

  // Фильтруем высшие категории
  const topLevelCategories = allSkills.filter((item) => item.parent_id === '0');

  const [image, setImage] = useState<File | null>(null);

  const subCategoriesList = useMemo(
    () => allSkills.filter((skill) => skill.parent_id === formData.skillId),
    [formData.skillId]
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setImage(file);
      setFormData({
        ...formData,
        avatar: file
      });
    }
  };

  const handleSubmit = () => {
    onNextStep();
  };

  const isFormValid = Boolean(
    formData.name &&
      formData.gender &&
      formData.city &&
      formData.skillId &&
      (formData.skillWants?.length ?? 0) > 0
  );

  return (
    <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.avatarContainer}>
        <label htmlFor='avatar' className={styles.avatarLabel}>
          <img
            src={image ? URL.createObjectURL(image) : iconAdd}
            alt='Загрузить аватар'
          />
        </label>
        <input
          type='file'
          id='avatar'
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='name' className={styles.label}>
          Имя
        </label>
        <input
          id='name'
          type='text'
          value={formData.name || ''}
          placeholder='Введите ваше имя'
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          className={styles.input}
        />
      </div>

      <div className={styles.twoColumnContainer}>
        <div className={styles.column}>
          <label htmlFor='age' className={styles.label}>
            Дата рождения
          </label>
          <InputDateUI
            selectedDate={formData?.age || new Date()}
            onChange={(date) => {
              date && setFormData({ ...formData, age: date });
            }}
          />
        </div>
        <div className={styles.column}>
          <label htmlFor='gender' className={styles.label}>
            Пол
          </label>
          <SearchableSelect
            values={gender}
            onChange={(value) => {
              setFormData({ ...formData, gender: value });
            }}
            placeholder='Не указан'
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='city' className={styles.label}>
          Город
        </label>
        <SearchableSelect
          values={cities}
          onChange={(value) => {
            setFormData({ ...formData, city: value });
          }}
          placeholder='Не указан'
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='category' className={styles.label}>
          Категория навыка, которому хотите научиться
        </label>
        <SearchableSelect
          values={topLevelCategories.map((cat) => cat.name)}
          onChange={(value) => {
            const skillId = allSkills.find(
              (skill) => skill.name === value
            )?._id;
            skillId && setFormData({ ...formData, skillId: skillId });
          }}
          placeholder='Выберите категорию'
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='subcategory' className={styles.label}>
          Подкатегория навыка, которому хотите научиться
        </label>
        <MultipleSelectDropdown
          values={subCategoriesList.map((skill) => skill.name)}
          placeholder='Не выбрано'
          onChange={(selectedValues: string[]) => {
            const skillWants: string[] = selectedValues.flatMap((skillName) => {
              const skillData = subCategoriesList.find(
                (subCategory) => subCategory.name === skillName
              );
              return skillData ? [skillData._id] : [];
            });
            setFormData({
              ...formData,
              skillWants: skillWants
            });
          }}
        />
      </div>

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
          children='Продолжить'
          onClick={handleSubmit}
          disabled={!isFormValid}
        />
      </div>
    </form>
  );
};

export default RegistrationFormStep2;
