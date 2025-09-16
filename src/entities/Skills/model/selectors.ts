import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

const getSkillsData = (state: RootState) => state.skills;

export const selectAllSkills = createSelector(
  getSkillsData,
  (state) => state.skills || []
);

export const selectSkillByName = createSelector(
  [getSkillsData, (_, name: string) => name],
  (state, name) => state.skills.find((skill) => skill.name === name)
);

export const selectSkillById = createSelector(
  [getSkillsData, (_, id: string) => id],
  (state, id) => state.skills.find((skill) => skill._id === id)
);

export const selectSubcategoriesByCategory = (categoryName: string) =>
  createSelector([selectAllSkills], (skills) => {
    const parent = skills.find(
      (skill) => skill.name === categoryName && skill.parent_id === '0'
    );
    if (!parent) {
      return [];
    }
    const subCategories = skills
      .filter((s) => s.parent_id === parent._id)
      .map((s) => s.name);
    return subCategories;
  });
