import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SearchableSelect } from './SearchableSelect';

const meta: Meta = {
  title: 'SearchableSelect',
  component: SearchableSelect,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof SearchableSelect>;

export const Default: Story = {
  args: {
    values: ['Москва', 'Томск', 'Красноярск', 'Анапа'],
    onChange: (value) => {
      console.log(value);
    },
    placeholder: 'Не указан'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '436px' }}>
        <Story />
      </div>
    )
  ]
};
