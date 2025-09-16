import { configureStore } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

import { userReducer, userInitialState } from '@entities/User/store';
import { userThunk } from '../model';

import { setIsAuthChecked, clearError } from '@entities/User/store';

import {
  selectAuthChecked,
  selectAuthError,
  selectUser,
  selectIsUserAuth,
  selectUserProfileData
} from '@entities/User';

import { TRegisterData, TUserCard } from '@api';

const date = new Date();

const mockData: TRegisterData = {
  email: 'test@mail.ru',
  password: '1111',
  name: 'Василий',
  city: 'Томск',
  age: date,
  description: 'Что-то. О чём-то',
  gender: 'Мужской',
  avatar: undefined,
  photos: [],
  skillName: 'SomeSkill',
  skillCanTeachCategory: '1',
  skillCanTeachSubCategory: '1',
  skillWants: ['1'],
  skillId: '1'
};

describe('тест работы userSlice', () => {
  describe('тест работы асинхронных экшенов', () => {
    describe('тест экшена register', () => {
      test('тест состояния pending', () => {
        const action = { type: userThunk.register.pending.type };
        const state = userReducer(userInitialState, action);

        expect(state.isAuthChecked).toBeTruthy();
        expect(state.user).toBeNull();
        expect(state.error).toBeNull();
      });
      test('тест состояния fulfilled', () => {
        const action = {
          type: userThunk.register.fulfilled.type,
          payload: mockData
        };
        const state = userReducer(userInitialState, action);

        expect(state.isAuthChecked).toBeFalsy();
        expect(state.user).toEqual(mockData);
      });
      test('тест состояния rejected', () => {
        const action = {
          type: userThunk.register.rejected.type,
          payload: 'Какая-то ошибка'
        };
        const state = userReducer(userInitialState, action);

        expect(state.isAuthChecked).toBeFalsy();
        expect(state.error).toBe('Какая-то ошибка');
      });
    });
    describe('тест экшена updateUser', () => {
      test('тест состояния fulfilled', () => {
        const action = {
          type: userThunk.updateUser.fulfilled.type,
          payload: mockData
        };
        const state = userReducer(userInitialState, action);

        expect(state.user).toEqual(mockData);
      });
    });
    describe('тест экшена logout', () => {
      test('тест состояния fulfilled', () => {
        const action = { type: userThunk.logout.fulfilled.type };
        const state = userReducer(
          {
            ...userInitialState,
            user: { ...mockData, favorites: [], userCard: {} as TUserCard }
          },
          action
        );

        expect(state.user).toBeNull();
      });
    });

    describe('тест экшен putLike', () => {
      test('тест состояния fulfilled', () => {
        const action = {
          type: userThunk.putLike.fulfilled.type,
          payload: {
            data: {
              favorites: ['1', '2']
            }
          }
        };
        const state = userReducer(
          {
            ...userInitialState,
            user: { ...mockData, favorites: ['1'], userCard: {} as TUserCard }
          },
          action
        );

        expect(state.user?.favorites).toEqual(['1', '2']);
      });
    });
    describe('тест экшен deleteLike', () => {
      test('тест состояния fulfilled', () => {
        const action = {
          type: userThunk.deleteLike.fulfilled.type,
          payload: {
            data: {
              favorites: ['1', '2']
            }
          }
        };
        const state = userReducer(
          {
            ...userInitialState,
            user: {
              ...mockData,
              favorites: ['1', '2', '3'],
              userCard: {} as TUserCard
            }
          },
          action
        );

        expect(state.user?.favorites).toEqual(['1', '2']);
      });
    });
  });
  describe('тест синхронных экшенов', () => {
    test('тест экшена setIsAuthChecked', () => {
      const action = { type: setIsAuthChecked.type, payload: true };
      const state = userReducer(userInitialState, action);

      expect(state.isAuthChecked).toBeTruthy();
    });
    test('тест экшена clearError', () => {
      const action = { type: clearError.type };
      const state = userReducer(
        {
          ...userInitialState,
          error: 'Какая-то ошибка'
        },
        action
      );

      expect(state.error).toBeNull();
    });
  });
  describe('тест работы селекторов', () => {
    const store = configureStore({
      reducer: {
        user: userReducer
      },
      preloadedState: {
        user: {
          isAuthChecked: true,
          user: { ...mockData, favorites: [], userCard: {} as TUserCard },
          error: 'Какая-то ошибка'
        }
      }
    });

    test('тест селектора selectAuthChecked', () => {
      const expectedChecked = selectAuthChecked(store.getState() as RootState);
      expect(expectedChecked).toBeTruthy();
    });
    test('тест селектора selectAuthError', () => {
      const expectedError = selectAuthError(store.getState() as RootState);
      expect(expectedError).toBe('Какая-то ошибка');
    });
    test('тест селектора selectUser', () => {
      const expectedUser = selectUser(store.getState() as RootState);
      expect(expectedUser).toEqual({
        ...mockData,
        favorites: [],
        userCard: {} as TUserCard
      });
    });
    test('тест селектора selectIsUserAuth', () => {
      const expectedUserExist = selectIsUserAuth(store.getState() as RootState);
      expect(expectedUserExist).toBeTruthy;
    });
    test('тест селектора selectUserProfileData', () => {
      const expectedUserProfileData = selectUserProfileData(
        store.getState() as RootState
      );
      expect(expectedUserProfileData).toEqual({
        email: 'test@mail.ru',
        password: '1111',
        name: 'Василий',
        city: 'Томск',
        gender: 'Мужской',
        age: date,
        avatar: undefined,
        description: 'Что-то. О чём-то'
      });
    });
  });
});
