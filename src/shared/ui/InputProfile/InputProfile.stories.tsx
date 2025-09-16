import React, { useState, ChangeEvent } from 'react'; // ✅ Добавлен импорт React
import type { Meta, StoryObj } from '@storybook/react';

import { InputProfile } from './InputProfile';
import { TInputProfileProps } from './types';

const meta: Meta = {
  title: 'InputProfile',
  component: InputProfile,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

const InputTemplate = () => {
  const [value, setValue] = useState('');

  const handlerValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div
      style={{
        width: 460,
        backgroundColor: '#8E8E8E60',
        margin: '0 auto',
        padding: 10
      }}
    >
      <InputProfile value={value} onChange={handlerValue} />
    </div>
  );
};

export const InputProfileExample: Story = {
  render: InputTemplate
};
