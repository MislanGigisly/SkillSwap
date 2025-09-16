import type { Meta, StoryObj } from '@storybook/react';
import RegistrationDescription from './registration-description';
import React from 'react';

const meta: Meta<typeof RegistrationDescription> = {
  title: 'Forms/RegistrationDescription',
  component: RegistrationDescription,
  tags: ['autodocs'],
  argTypes: {
    step: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'Номер шага (1, 2 или 3)'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Step1: Story = {
  args: {
    step: 1
  }
};

export const Step2: Story = {
  args: {
    step: 2
  }
};

export const Step3: Story = {
  args: {
    step: 3
  }
};
