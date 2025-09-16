import { TColors } from '../types';

export interface ISearchableSelect {
  values: string[];
  onChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  selectedColor?: TColors;
}
