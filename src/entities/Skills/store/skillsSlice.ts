import { createSlice } from '@reduxjs/toolkit';

import { TSkillState } from '../model/types';
import { skillsThunk } from '../model/thunk';

const initialState: TSkillState = {
  skills: []
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(skillsThunk.getSkills.fulfilled, (state, { payload }) => {
      state.skills = payload.data;
    });
  }
});

export const skillsReducer = skillsSlice.reducer;
export { initialState as InitialStateSkill };
