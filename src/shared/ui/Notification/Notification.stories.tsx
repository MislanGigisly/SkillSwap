import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';
import { useState } from 'react';

const meta: Meta<typeof Notification> = {
  title: 'icons/Notification',
  component: Notification,
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
    activeСolor: {
      control: 'color'
    },
    checked: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    color: 'default-icon',
    activeСolor: 'alarm',
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
