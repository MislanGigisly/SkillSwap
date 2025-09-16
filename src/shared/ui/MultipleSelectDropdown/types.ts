export type MultipleSelectDropdownProps = {
  values: string[];
  selected?: [];
  placeholder?: string;
  label?: string;
  onChange?: (values: string[]) => void;
};
