export type TSize = 'small' | 'medium' | 'large';

export const iconSizes = {
  small: 16,
  medium: 24,
  large: 32
};

export type TColors =
  | 'text'
  | 'accent'
  | 'caption'
  | 'disabled-text'
  | 'toggle'
  | 'disabled'
  | 'card'
  | 'input'
  | 'text-link'
  | 'button-pressed'
  | 'button-hover'
  | 'default-icon'
  | 'accent-icon'
  | 'background'
  | 'alarm'
  | 'error'
  | 'tag-business'
  | 'tag-creativity'
  | 'tag-languages'
  | 'tag-education'
  | 'tag-home'
  | 'tag-health'
  | 'tag-default';

export type TRegisterData = {
  email?: string;
  password?: string;
  name?: string;
  age?: Date | null;
  gender?: string;
  city?: string;
  skillId?: string;
  skillWants?: string[];
  avatar?: File | null;
  photos?: File[] | null;
  skillName?: string;
  skillCanTeachCategory?: string;
  skillCanTeachSubCategory?: string;
  description?: string;
};
