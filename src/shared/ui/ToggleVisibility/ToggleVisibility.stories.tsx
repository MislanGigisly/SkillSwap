import type { Meta, StoryObj } from '@storybook/react';
import { ToggleVisibility } from './ToggleVisibility';
import { useState } from 'react';

const meta: Meta<typeof ToggleVisibility> = {
  title: 'icons/ToggleVisibility',
  component: ToggleVisibility,
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
type Story = StoryObj<typeof ToggleVisibility>;

export const Default: Story = {
  args: {
    color: 'default-icon',
    activeColor: 'default-icon',
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
