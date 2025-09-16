import { TUser } from '@api';

export type TAuthState = {
  isAuthChecked: boolean;
  user: TUser | null;
  error: string | null;
};
