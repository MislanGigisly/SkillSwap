import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SingleSelectDropdown } from './SingleSelectDropdown';

const meta: Meta = {
  title: 'SingleSelectDropdown',
  component: SingleSelectDropdown,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof SingleSelectDropdown>;

export const Default: Story = {
  args: {
    values: ['Не указан', 'Мужской', 'Женский'],
    placeholder: 'Не указан',
    label: 'Пол'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '436px' }}>
        <Story />
      </div>
    )
  ]
};
