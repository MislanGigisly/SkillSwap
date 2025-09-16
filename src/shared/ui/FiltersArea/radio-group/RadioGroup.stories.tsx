import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { RadioGroup } from './RadioGroup';
import type { RadioGroupProps } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

const RadioGroupWithState = (args: RadioGroupProps) => {
  const [value, setValue] = useState(args.selected ?? '');

  return <RadioGroup {...args} selected={value} onChange={setValue} />;
};

export const RadioGroupStory: Story = {
  render: (args) => <RadioGroupWithState {...args} />,
  args: {
    selected: 'Всё',
    name: 'radio-group_all',
    options: [
      { value: 'Всё' },
      { value: 'Хочу научиться' },
      { value: 'Могу научить' }
    ],
    title: ''
  }
};

export const ListGroupStory: Story = {
  render: (args) => <RadioGroupWithState {...args} />,
  args: {
    selected: 'Не имеет значения',
    name: 'radio-group_sex',
    options: [
      { value: 'Не имеет значения' },
      { value: 'Мужской' },
      { value: 'Женский' }
    ],
    title: 'Пол автора'
  }
};
