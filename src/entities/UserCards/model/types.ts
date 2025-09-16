import { TUserCard } from '@api';

export type TUserCardsState = {
  cards: TUserCard[];
  exchangeRequest: boolean;
  error: boolean;
  isLoading: boolean;
  showSuccessModal: boolean;
};
