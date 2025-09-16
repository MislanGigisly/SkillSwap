import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MultipleSelectDropdown } from './MultipleSelectDropdown';

const meta: Meta = {
  title: 'MultipleSelectDropdown',
  component: MultipleSelectDropdown,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof MultipleSelectDropdown>;

export const Default: Story = {
  args: {
    values: [
      'Бизнес и карьера',
      'Творчество и искусство',
      'Иностранные языки',
      'Здоровье и лайфстайл',
      'Дом и уют'
    ],
    placeholder: 'Не указан',
    label: 'Категория навыка, которому хотите научиться'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '436px' }}>
        <Story />
      </div>
    )
  ]
};
