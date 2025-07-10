import { createSlice } from '@reduxjs/toolkit';

import { userCardsThunk } from '../model';
import { TUserCardsState } from '../model/types';

const initialState: TUserCardsState = {
  cards: [],
  exchangeRequest: false,
  error: false,
  isLoading: false
};

const userCardsSlice = createSlice({
  name: 'userCards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      userCardsThunk.getUserCards.fulfilled,
      (state, { payload }) => {
        state.cards = payload.data;
      }
    );

    builder.addCase(userCardsThunk.exchangeRequest.pending, (state) => {
      state.exchangeRequest = true;
      state.error = false;
      state.isLoading = true;
    });

    builder.addCase(userCardsThunk.exchangeRequest.fulfilled, (state) => {
      state.exchangeRequest = false;
      state.isLoading = false;
    });
    builder.addCase(userCardsThunk.exchangeRequest.rejected, (state) => {
      state.exchangeRequest = false;
      state.error = true;
      state.isLoading = false;
    });
  }
});

export const userCardsReducer = userCardsSlice.reducer;
export { initialState as userCardsInitialState };
