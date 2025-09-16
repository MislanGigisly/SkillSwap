export type TRegisterData = {
  email: string;
  password: string;
  name: string;
  age: string;
  gender: string;
  city: string;
  skillId: string;
  skillWants: string[];
  skillName: string;
  skillCanTeachCategory: string;
  skillCanTeachSubCategory: string;
  description: string;
  avatar: string;
  photos: string[];
};

export interface TUserCard {
  _id: string;
  name: string;
  age: string;
  description: string;
  gender: string;
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
