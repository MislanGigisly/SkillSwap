import { createAsyncThunk } from '@reduxjs/toolkit';

import { exchangeRequestApi, getUserCardsApi } from '@api';

export const userCardsThunk = {
  getUserCards: createAsyncThunk('userCards/getUserCards', () =>
    getUserCardsApi()
  ),
  exchangeRequest: createAsyncThunk('userCards/exchangeRequest', () =>
    exchangeRequestApi()
  )
};
