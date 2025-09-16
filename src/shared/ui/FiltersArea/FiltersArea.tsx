import clsx from 'clsx';
import { useState } from 'react';
import { CheckboxList } from './checkbox-lists/CheckboxList';
import { CheckboxListSubcategory } from './checkbox-lists/CheckboxListSubcategory';
import styles from './FiltersArea.module.css';
import { cities, skills } from './mockData';
import { RadioGroup } from './radio-group/RadioGroup';
import { Text } from '../Text/Text';
import React from 'react';

export const FiltersArea = () => {
  const [select, setSelect] = useState('Все');
  const [userSex, setUserSex] = useState('Не имеет значения');

  const [selectedSkills, setSelectSkills] = useState<string[]>([]);
  const [selectedCities, setSelectCities] = useState<string[]>([]);

  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllCities, setShowAllCities] = useState(false);

  const [dropdownSkills, setDropdownSkills] = useState<Record<string, boolean>>(
    {}
  );

  const toggleSkill = (value: string) => {
    setSelectSkills((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  const toggleSkillCategory = (itemCategory: string) => {
    setDropdownSkills((prev) => ({
      ...prev,
      [itemCategory]: !prev[itemCategory]
    }));

    if (!dropdownSkills[itemCategory]) {
      setSelectSkills((prev) =>
        prev.includes(itemCategory) ? prev : [...prev, itemCategory]
      );
    } else {
      setSelectSkills((prev) => prev.filter((value) => value !== itemCategory));
    }
  };

  const toggleCity = (value: string) => {
    setSelectCities((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text as='h2' color='text'>
          Фильтры
        </Text>
      </div>
      <section className={styles.section}>
        <RadioGroup
          name={'radio-group_all'}
          options={[
            { value: 'Все' },
            { value: 'Хочу научиться' },
            { value: 'Могу научить' }
          ]}
          selected={select}
          onChange={setSelect}
          title=''
        />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <Text as='h3' color='text'>
            Навыки
          </Text>
        </div>
        {(showAllSkills ? skills : skills.slice(0, 6)).map((item) => (
          <div key={item.category} className={styles.skillCategory}>
            <div
              className={styles.skillCategoryHeader}
              onClick={() => toggleSkillCategory(item.category)}
              role='button'
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleSkillCategory(item.category);
                }
              }}
            >
              <CheckboxList
                name='checkboxList_skills'
                options={[{ value: item.category }]}
                selected={selectedSkills}
                onChange={() => {}}
                onClick={() => toggleSkillCategory(item.category)}
                isSubcategory
              />
              <span
                className={clsx(styles.Icon_skill, {
                  [styles.open]:
                    dropdownSkills[item.category] && item.subcategories
                })}
              />
            </div>

            {dropdownSkills[item.category] && item.subcategories && (
              <div className={styles.subcategories}>
                <CheckboxListSubcategory
                  name='checkboxList_skills_subcategories'
                  options={item.subcategories.map((value) => ({ value }))}
                  selected={selectedSkills}
                  onChange={toggleSkill}
                />
              </div>
            )}
          </div>
        ))}

        <button
          type='button'
          className={styles.toggleButton}
          onClick={() => setShowAllSkills(!showAllSkills)}
        >
          <Text as='bodyText' color='text-link'>
            Все категории
          </Text>
          <span
            className={clsx(styles.chevronIcon, {
              [styles.open]: showAllSkills
            })}
          />
        </button>
      </section>

      <section className={styles.section}>
        <RadioGroup
          name={'radio-group_sex'}
          options={[
            { value: 'Не имеет значения' },
            { value: 'Женский' },
            { value: 'Мужской' }
          ]}
          selected={userSex}
          onChange={setUserSex}
          title='Пол автора'
        />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <Text as='h3' color='text'>
            Город
          </Text>
        </div>
        <CheckboxListSubcategory
          name='checkboxList_cities'
          options={showAllCities ? cities : cities.slice(0, 5)}
          selected={selectedCities}
          onChange={toggleCity}
        />
        <button
          type='button'
          className={styles.toggleButton}
          onClick={() => setShowAllCities(!showAllCities)}
        >
          <Text as='bodyText' color='text-link'>
            Все города
          </Text>
          <span
            className={clsx(styles.chevronIcon, {
              [styles.open]: showAllCities
            })}
          />
        </button>
      </section>
    </div>
  );
};
