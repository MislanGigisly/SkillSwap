import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxListSubcategory } from './CheckboxListSubcategory';
import { useState } from 'react';
import React from 'react';

const meta: Meta = {
  title: 'components/CheckboxListSubcategory',
  component: CheckboxListSubcategory,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof CheckboxListSubcategory>;

const CheckboxListSubcategoryWithState = () => {
  const optionsCities = [
    { value: 'Москва' },
    { value: 'Санкт-Петербург' },
    { value: 'Новосибирск' },
    { value: 'Екатеринбург' },
    { value: 'Казань' }
  ];
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const handleChangeCities = (value: string) => {
    setSelectedCities((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <CheckboxListSubcategory
        selected={selectedCities}
        name='checkboxList_cities'
        onChange={handleChangeCities}
        options={optionsCities}
      />
    </>
  );
};

export const CheckboxListSubcategoryStory: Story = {
  render: () => <CheckboxListSubcategoryWithState />
};
