import { FC, ChangeEvent, FormEvent, useMemo, useCallback } from 'react';
import styles from './ProfileSettingsForm.module.css';
import { Text } from '../../shared/ui/Text/Text';
import { useState } from 'react';
import { InputDateUI } from '../../shared/ui/InputDate/InputDate';
import { Button } from '../../shared/ui/button/button';
import { SearchableSelect } from '../../shared/ui/SearchableSelect/SearchableSelect';
import { CITIES, GENDER } from './mockData';
import { TextBlock } from '../../shared/ui/textBlock/textBlock';
import { useDispatch, useSelector } from '@app/store/store';
import { selectUserProfileData, userThunk } from '@entities/User';
import { InputProfile } from '@shared/ui/InputProfile';
import editIcon from '@shared/assets/icons/edit-icon.svg';
import { TUserDataUpdate } from '@api/types';

export const ProfileSettingsForm: FC = () => {
  const dispatch = useDispatch();

  const userData = useSelector(selectUserProfileData);

  const [userUpdate, setUserUpdate] = useState<TUserDataUpdate>(
    userData as TUserDataUpdate
  );
  const [userImage, setUserImage] = useState<File | null>(null);

  const [erros, setErrors] = useState({
    email: '',
    password: '',
    name: ''
  });

  const [changePassword, setChangePassword] = useState(false);

  const handleChangeData = (event: ChangeEvent<HTMLInputElement>) => {
    setUserUpdate((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const validate = useCallback(() => {
    let validateStatus = true;

    if (userUpdate?.password?.length < 4) {
      setErrors((prev) => ({
        ...prev,
        password: 'Пароль не может быть меньше 4 символов'
      }));
      validateStatus = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userUpdate?.email)) {
      setErrors((prev) => ({
        ...prev,
        email: 'Email должен содержать символ @'
      }));
      validateStatus = false;
    }

    if (!userUpdate.name?.trim()) {
      setErrors((prev) => ({
        ...prev,
        name: 'Поле Имя не может быть пустым'
      }));
      validateStatus = false;
    }

    return validateStatus;
  }, [userUpdate.email, userUpdate.password, userUpdate.name]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    dispatch(userThunk.updateUser(userUpdate));
  };

  const hasChanges = useMemo(
    () => JSON.stringify(userData) !== JSON.stringify(userUpdate),
    [userData, userUpdate]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.profileContent}>
        <div className={styles.mainContent}>
          <form className={styles.profileForm} onSubmit={handleSubmit}>
            <div className={styles.formFields}>
              <div className={styles.formField}>
                <Text as='bodyText' color='text'>
                  Почта
                </Text>
                <InputProfile
                  value={userUpdate.email || ''}
                  onChange={handleChangeData}
                  type='email'
                  placeholder='Введите email'
                  name='email'
                />
                {erros.email && (
                  <Text as='caption' color='error'>
                    {erros.email}
                  </Text>
                )}

                {changePassword ? (
                  <div
                    style={{
                      marginBlockStart: 12,
                      marginBlockEnd: 12
                    }}
                  >
                    <Text as='bodyText' color='text'>
                      Пароль
                    </Text>
                    <InputProfile
                      value={userUpdate.password || ''}
                      onChange={handleChangeData}
                      placeholder='Введите пароль'
                      name='password'
                    />
                    {erros.password && (
                      <Text as='caption' color='error'>
                        {erros.password}
                      </Text>
                    )}
                  </div>
                ) : (
                  <a
                    style={{
                      cursor: 'pointer',
                      marginBlockStart: 12,
                      marginBlockEnd: 12
                    }}
                    onClick={() => {
                      setChangePassword(true);
                    }}
                  >
                    <Text as='h4' color='text-link'>
                      Изменить пароль
                    </Text>
                  </a>
                )}
              </div>

              <div className={styles.formField}>
                <Text as='bodyText' color='text'>
                  Имя
                </Text>
                <InputProfile
                  value={userUpdate.name || ''}
                  onChange={handleChangeData}
                  name='name'
                  placeholder='Введите имя'
                />
                {erros.name && (
                  <Text as='caption' color='error'>
                    {erros.name}
                  </Text>
                )}
              </div>

              <div className={styles.rowFields}>
                <div className={styles.rowField}>
                  <Text as='bodyText' color='text'>
                    Дата рождения
                  </Text>

                  <InputDateUI
                    onChange={(date: Date | null) => {
                      date && setUserUpdate((prev) => ({ ...prev, age: date }));
                    }}
                    selectedDate={userData.age || new Date()}
                  />
                </div>

                <div className={styles.rowField}>
                  <Text as='bodyText' color='text'>
                    Пол
                  </Text>
                  <SearchableSelect
                    values={GENDER}
                    onChange={(value) =>
                      setUserUpdate((prev) => ({ ...prev, gender: value }))
                    }
                    placeholder={'Выберите пол'}
                    defaultValue={userUpdate.gender}
                  />
                </div>
              </div>

              <div className={styles.formField}>
                <Text as='bodyText' color='text'>
                  Город
                </Text>
                <SearchableSelect
                  values={CITIES}
                  onChange={(value) =>
                    setUserUpdate((prev) => ({ ...prev, city: value }))
                  }
                  placeholder={'Выберите город'}
                  defaultValue={userUpdate.city}
                />
              </div>

              <div className={styles.formField} style={{ marginBlockEnd: 32 }}>
                <Text as='bodyText' color='text'>
                  О себе
                </Text>
                <TextBlock
                  value={userUpdate?.description || ''}
                  maxLength={200}
                  onChange={(event) => {
                    setUserUpdate((prev) => ({
                      ...prev,
                      description: event.target.value
                    }));
                  }}
                />
              </div>
              <Button
                onClick={handleSubmit}
                children={
                  <Text as='bodyText' color='text'>
                    Сохранить
                  </Text>
                }
                size='large'
                type='submit'
                disabled={!hasChanges}
              />
            </div>
          </form>
        </div>

        <div className={styles.avatarSection}>
          <div style={{ width: 244, height: 244, position: 'relative' }}>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
              src={
                userImage
                  ? URL.createObjectURL(userImage)
                  : typeof userUpdate?.avatar === 'string'
                    ? userUpdate.avatar
                    : ''
              }
              alt='аватарка пользователя'
            />
            <button className={styles.imageButton}>
              <label htmlFor='avatarImage' className={styles.avatarLabel}>
                <img src={editIcon} alt='редактировать аватарку пользователя' />
                <input
                  id='avatarImage'
                  type='file'
                  accept='image/*'
                  className={styles.visuallyHidden}
                  onChange={(e) => {
                    const files = e.target.files;

                    if (!files || files.length === 0) return;

                    const file = files[0];
                    setUserImage(file);
                    setUserUpdate((prev) => ({
                      ...prev,
                      avatar: file
                    }));
                  }}
                />
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
