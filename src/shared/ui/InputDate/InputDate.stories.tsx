import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InputDateUI } from './InputDate';

const meta: Meta<typeof InputDateUI> = {
  title: 'InputDate',
  component: InputDateUI,
  tags: ['autodocs'],
  args: {
    // Добавьте дефолтные значения
    onChange: (date: Date | null) => console.log(date),
    selectedDate: new Date()
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <InputDateUI
        {...args}
        selectedDate={date || new Date()}
        onChange={setDate}
      />
    );
  }
};
