import { configureStore } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

import { userCardsReducer, userCardsInitialState } from '@entities/UserCards';
import { userCardsThunk } from '../model';

import {
  selectExchangeRequest,
  selectUserCards,
  selectUserCardError
} from '../model/selectors';
import { TUserCard } from '@api';

const mockData: TUserCard = {
  _id: '1',
  name: 'Василий',
  age: '23 года',
  gender: 'Мужской',
  description: 'О том и сём',
  city: 'Томск',
  skillName: 'Сальто назад',
  skillId: '1',
  skillWants: ['2', '3'],
  avatar: '',
  photos: [],
  about: ''
};

describe('тест работы userCardsSlice', () => {
  describe('тест асинхронных экшенов', () => {
    describe('тест экшена getUserCards', () => {
      test('тест состояния fulfilled', () => {
        const action = {
          type: userCardsThunk.getUserCards.fulfilled.type,
          payload: {
            data: [mockData]
          }
        };
        const state = userCardsReducer(userCardsInitialState, action);

        expect(state.cards).toEqual([mockData]);
      });
    });
    describe('тест экшена exchangeRequest', () => {
      test('тест состояния pending', () => {
        const action = {
          type: userCardsThunk.exchangeRequest.pending.type
        };
        const state = userCardsReducer(userCardsInitialState, action);

        expect(state.exchangeRequest).toBeTruthy();
        expect(state.error).toBeFalsy();
      });
      test('тест состояния fulfilled', () => {
        const action = {
          type: userCardsThunk.exchangeRequest.fulfilled.type
        };
        const state = userCardsReducer(userCardsInitialState, action);

        expect(state.exchangeRequest).toBeFalsy();
      });
      test('тест состояния rejected', () => {
        const action = {
          type: userCardsThunk.exchangeRequest.rejected.type
        };
        const state = userCardsReducer(userCardsInitialState, action);

        expect(state.exchangeRequest).toBeFalsy();
        expect(state.error).toBeTruthy();
      });
    });
  });
  describe('тест селекторов', () => {
    const store = configureStore({
      reducer: {
        userCards: userCardsReducer
      },
      preloadedState: {
        userCards: {
          cards: [mockData, mockData],
          exchangeRequest: true,
          error: true,
          isLoading: false,
          showSuccessModal: false
        }
      }
    });

    test('тест селектора selectUserCards', () => {
      const expectedUserCards = selectUserCards(store.getState() as RootState);
      expect(expectedUserCards).toEqual([mockData, mockData]);
    });
    test('тест селектора selectExchangeRequest', () => {
      const expectedExchangeRequest = selectExchangeRequest(
        store.getState() as RootState
      );
      expect(expectedExchangeRequest).toBeTruthy();
    });
    test('тест селектора selectUserCardError', () => {
      const expectedError = selectUserCardError(store.getState() as RootState);
      expect(expectedError).toBeTruthy();
    });
  });
});
