import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'icons/Radio',
  component: Radio,
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
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    color: 'default-icon',
    activeColor: 'button-pressed',
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
