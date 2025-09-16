import { TUser } from './types';

export function formatAge(age: number): string {
  if (age >= 11 && age <= 19) {
    return `${age} лет`;
  }

  const lastDigit = age % 10;
  switch (lastDigit) {
    case 1:
      return `${age} год`;
    case 2:
    case 3:
    case 4:
      return `${age} года`;
    default:
      return `${age} лет`;
  }
}

export function countAge(date: string) {
  const birthDate = new Date(date);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export const updateUserData = (
  user: TUser,
  updateData: Partial<TUser>,
  newAvatar?: Express.Multer.File[]
) => ({
  ...user,
  email: updateData.email ?? user.email,
  name: updateData.name ?? user.name,
  password: updateData.password ?? user.password,
  age: updateData.age ?? user.age,
  city: updateData.city ?? user.city,
  description: updateData.description ?? user.description,
  avatar: newAvatar ? newAvatar[0] : user.avatar,
  userCard: {
    ...user.userCard,
    name: updateData.name ?? user.userCard.name,
    age: updateData.age
      ? formatAge(countAge(updateData.age))
      : user.userCard.age,
    description: updateData.description ?? user.userCard.description,
    avatar: newAvatar
      ? `/uploads/${newAvatar[0].filename}`
      : user.userCard.avatar,
    gender: updateData.gender ?? user.userCard.gender
  }
});
