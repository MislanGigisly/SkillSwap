import type { Meta, StoryObj } from '@storybook/react';
import RegistrationFormStep3 from './RegistrationFormStep3';
import React from 'react';

type RegistrationFormStep3Type = React.ComponentProps<
  typeof RegistrationFormStep3
>;

const meta: Meta<RegistrationFormStep3Type> = {
  title: 'Forms/RegistrationFormStep3',
  component: RegistrationFormStep3,
  tags: ['autodocs'],
  argTypes: {
    onNextStep: { action: 'onNextStep' },
    onPrevStep: { action: 'onPrevStep' },
    setFormData: { action: 'setFormData' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setFormData: () => {},
    onNextStep: () => {},
    onPrevStep: () => {}
  }
};

export const WithFilledFields: Story = {
  args: {
    formData: {
      skillName: 'Учу продавать ручки',
      skillCanTeachCategory: 'Бизнес и карьера',
      skillCanTeachSubCategory: 'Продажи и переговоры',
      description: 'Могу научить продавать',
      email: 'user@example.com',
      password: 'secret123',
      name: 'Иван Иванов',
      age: new Date('1111-11-11'),
      gender: 'Мужской',
      city: 'Москва',
      skillId: '1',
      skillWants: ['Продажи и переговоры', 'Управление командой']
    },
    setFormData: (data) => {},
    onNextStep: () => {},
    onPrevStep: () => {}
  }
};
