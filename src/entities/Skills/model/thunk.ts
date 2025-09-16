import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSkillsApi, TSkillsResponse } from '@api';

export const skillsThunk = {
  getSkills: createAsyncThunk<TSkillsResponse>('getSkills/get', () =>
    getSkillsApi()
  )
};
