export type TServerResponse<T> = {
  success: boolean;
  data: T;
};

export type TRegisterData = {
  email: string;
  password: string;
  name: string;
  age: Date;
  gender: string;
  city: string;
  skillId: string;
  skillWants: string[];
  skillName: string;
  skillCanTeachCategory: string;
  skillCanTeachSubCategory: string;
  description: string;
  avatar?: File;
  photos?: File[];
};

export interface TUserCard {
  _id: string;
  name: string;
  age: string;
  gender: string;
  description: string;
  about: string;
  city: string;
  skillName: string;
  skillId: string;
  skillWants: string[];
  avatar: string;
  photos: string[];
}

export type TUser = TRegisterData & {
  userCard: TUserCard;
  favorites: string[];
};

export type TUserCardsResponse = TServerResponse<TUserCard[]>;

export type TSkill = {
  _id: string;
  name: string;
  parent_id: string;
};

export type TSkillsResponse = TServerResponse<TSkill[]>;

export type TAuthResponse =
  | TServerResponse<TUser>
  | { error: string; success: false };

export type TFavoritesResponse = TServerResponse<{ favorites: string[] }>;

export type TNotification = {
  _id: string;
  username: string;
  notificationType: string;
  date: string;
};

export type TUserDataUpdate = Pick<
  TRegisterData,
  | 'email'
  | 'age'
  | 'name'
  | 'password'
  | 'avatar'
  | 'gender'
  | 'city'
  | 'description'
>;
