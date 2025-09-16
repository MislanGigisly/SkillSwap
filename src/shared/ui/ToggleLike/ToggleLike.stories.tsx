import type { Meta, StoryObj } from '@storybook/react';
import { ToggleLike } from './ToggleLike';
import { useState } from 'react';

const meta: Meta<typeof ToggleLike> = {
  title: 'icons/ToggleLike',
  component: ToggleLike,
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
type Story = StoryObj<typeof ToggleLike>;

export const Default: Story = {
  args: {
    color: 'text',
    activeColor: 'accent',
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
