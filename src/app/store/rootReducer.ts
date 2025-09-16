import { combineReducers } from '@reduxjs/toolkit';

import { skillsReducer } from '@entities/Skills';
import { userReducer } from '@entities/User';
import { userCardsReducer } from '@entities/UserCards';

const rootReducer = combineReducers({
  skills: skillsReducer,
  user: userReducer,
  userCards: userCardsReducer
});

export default rootReducer;
