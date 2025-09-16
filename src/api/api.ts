import {
  TSkillsResponse,
  TFavoritesResponse,
  TRegisterData,
  TAuthResponse,
  TServerResponse,
  TUserCardsResponse,
  TUserDataUpdate
} from './types';

import { createFormatData } from '@shared/lib';

const BASE_URL = process.env.API_URL;

const checkoutResponse = async <T>(res: Response): Promise<T> => {
  const data = await res.json();
  if (!res.ok) {
    return Promise.reject(data);
  }
  return data as T;
};

export const getUserCardsApi = () =>
  fetch(`${BASE_URL}/userCards`)
    .then(checkoutResponse<TUserCardsResponse>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });

export const getSkillsApi = () =>
  fetch(`${BASE_URL}/skills`)
    .then(checkoutResponse<TSkillsResponse>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });

export const registerUserApi = (data: TRegisterData) =>
  fetch(`${BASE_URL}/register`, {
    method: 'POST',
    body: createFormatData(data)
  })
    .then(checkoutResponse<TAuthResponse>)
    .then((res) => {
      if ('success' in res) return res;
      return Promise.reject(res);
    });

export const logoutUserApi = () =>
  fetch(`${BASE_URL}/logout`, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('email')
    } as HeadersInit
  })
    .then(checkoutResponse<TServerResponse<{}>>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });

export const updateUserApi = (data: TUserDataUpdate) =>
  fetch(`${BASE_URL}/updateUser`, {
    method: 'PATCH',
    body: createFormatData(data),
    headers: {
      authorization: localStorage.getItem('email')
    } as HeadersInit
  })
    .then(checkoutResponse<TAuthResponse>)
    .then((res) => {
      if ('success' in res) return res;
      return Promise.reject(res);
    });

export const getFavoritesApi = () => {
  console.log('232');

  return fetch(`${BASE_URL}/favorites`, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('email')
    } as HeadersInit
  })
    .then(checkoutResponse<TFavoritesResponse>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });
};
export const putFavoriteApi = (cardId: string) =>
  fetch(`${BASE_URL}/favorites/${cardId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('email')
    } as HeadersInit
  })
    .then(checkoutResponse<TFavoritesResponse>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });

export const deleteFavoriteApi = (cardId: string) =>
  fetch(`${BASE_URL}/favorites/${cardId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('email')
    } as HeadersInit
  })
    .then(checkoutResponse<TFavoritesResponse>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });

export const exchangeRequestApi = () =>
  fetch(`${BASE_URL}/exchange-request`, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('email')
    } as HeadersInit
  })
    .then(checkoutResponse<TServerResponse<{}>>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });
