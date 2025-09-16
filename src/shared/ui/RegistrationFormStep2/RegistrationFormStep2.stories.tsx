import type { Meta, StoryObj } from '@storybook/react';
import RegistrationFormStep2 from './RegistrationFormStep2';
import React from 'react';

type RegistrationFormStep2Type = React.ComponentProps<
  typeof RegistrationFormStep2
>;

const meta: Meta<RegistrationFormStep2Type> = {
  title: 'Forms/RegistrationFormStep2',
  component: RegistrationFormStep2,
  tags: ['autodocs'],
  argTypes: {
    onNextStep: { action: 'onNextStep' },
    onPrevStep: { action: 'onPrevStep' },
    setFormData: { action: 'setFormData' }
  }
};

export default meta;

type Story = StoryObj<RegistrationFormStep2Type>;

export const Default: Story = {
  args: {
    setFormData: () => {},
    onNextStep: () => {},
    onPrevStep: () => {}
  }
};

export const WithFilledData: Story = {
  args: {
    setFormData: () => {},
    onNextStep: () => {},
    onPrevStep: () => {}
  }
};
