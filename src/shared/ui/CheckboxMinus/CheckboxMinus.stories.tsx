import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxMinus } from './CheckboxMinus';
import { useState } from 'react';

const meta: Meta<typeof CheckboxMinus> = {
  title: 'icons/CheckboxMinus',
  component: CheckboxMinus,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    color: {
      control: 'color'
    },
    activeColor: {
      control: 'color'
    },
    checked: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CheckboxMinus>;

export const Default: Story = {
  args: {
    color: 'default-icon',
    activeColor: 'accent-icon',
    size: 'medium',
    checked: false
  }
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: true
  }
};
