import { configureStore } from '@reduxjs/toolkit';

import { skillsReducer, InitialStateSkill } from '../store';
import { skillsThunk } from '../model/thunk';
import {
  selectAllSkills,
  selectSkillById,
  selectSkillByName
} from '../model/selectors';

import { TSkill } from '@api';
import { RootState } from '@app/store/store';

const mockData: TSkill[] = [
  {
    _id: '1',
    name: 'Бизнес и карьера',
    parent_id: '0'
  },
  {
    _id: '14',
    name: 'Предпринимательство',
    parent_id: '1'
  }
];

describe('тест работы skillSlice', () => {
  describe('тест асинхронных экшенов', () => {
    describe('тест экшена getSkills', () => {
      test('тест состояния fulfilled', () => {
        const action = {
          type: skillsThunk.getSkills.fulfilled.type,
          payload: { data: mockData }
        };

        const state = skillsReducer(InitialStateSkill, action);

        expect(state.skills).toHaveLength(2);
        expect(state.skills).toEqual(mockData);
      });
    });
  });
  describe('тест селекторов', () => {
    const store = configureStore({
      reducer: {
        skills: skillsReducer
      },
      preloadedState: {
        skills: {
          skills: mockData
        }
      }
    });

    const emptyStore = configureStore({
      reducer: {
        skills: skillsReducer
      },
      preloadedState: {
        skills: {
          skills: []
        }
      }
    });

    test('тест селектора selectAllSkills', () => {
      const exptectedSkills = selectAllSkills(store.getState() as RootState);
      const exptectedEmptySkills = selectAllSkills(
        emptyStore.getState() as RootState
      );

      expect(exptectedSkills).toEqual(mockData);
      expect(exptectedEmptySkills).toEqual([]);
    });

    test('тест селектора selectSkillById', () => {
      const expectedSkill = selectSkillById(store.getState() as RootState, '1');
      const expectedUndefined = selectSkillById(
        emptyStore.getState() as RootState,
        '1'
      );

      expect(expectedSkill).toEqual(mockData[0]);
      expect(expectedUndefined).toBeUndefined;
    });

    test('тест селектора selectSkillByName', () => {
      const expectedSkill = selectSkillByName(
        store.getState() as RootState,
        'Предпринимательство'
      );
      const expectedUndefined = selectSkillByName(
        store.getState() as RootState,
        'Предпринимательство'
      );

      expect(expectedSkill).toEqual(mockData[1]);
      expect(expectedUndefined).toBeUndefined;
    });
  });
});
