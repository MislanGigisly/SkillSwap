import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';
import { TUserDataUpdate } from '@api/types';

const getUserData = (state: RootState) => state.user;

export const selectAuthChecked = createSelector(
  getUserData,
  (state) => state.isAuthChecked
);
export const selectAuthError = createSelector(
  getUserData,
  (state) => state.error
);
export const selectUser = createSelector(getUserData, (state) => state.user);
export const selectIsUserAuth = createSelector(getUserData, (state) =>
  Boolean(state.user)
);
export const selectUserFavorites = createSelector(
  getUserData,
  (state) => state.user?.favorites
);

export const selectUserProfileData = createSelector(getUserData, (state) => ({
  email: state.user?.email,
  password: state.user?.password,
  name: state.user?.name,
  age: state.user?.age,
  gender: state.user?.gender,
  city: state.user?.city,
  description: state.user?.description,
  avatar: state.user?.userCard.avatar
}));
