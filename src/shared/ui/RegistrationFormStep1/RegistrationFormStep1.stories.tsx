import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RegistrationFormStep1 from './RegistrationFormStep1';

const meta: Meta<typeof RegistrationFormStep1> = {
  title: 'Forms/RegistrationFormStep1',
  component: RegistrationFormStep1,
  tags: ['autodocs'],
  argTypes: {
    onNextStep: { action: 'onNextStep' },
    setFormData: { action: 'setFormData' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setFormData: (data) => {},
    onNextStep: (data) => {}
  }
};

export const WithFilledFields: Story = {
  args: {
    setFormData: (data) => {},
    onNextStep: (data) => {}
  }
};
