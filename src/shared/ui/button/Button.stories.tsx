import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary']
    },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium'
  }
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary',
    size: 'medium'
  }
};
