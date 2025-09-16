import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SecureInput } from './passwordString';

const meta: Meta<typeof SecureInput> = {
  title: 'Components/SecureInput',
  component: SecureInput,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SecureInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [isHidden, setIsHidden] = useState(true);
    const [isTouched, setIsTouched] = useState(false);

    return (
      <SecureInput
        placeholder='Введите ваш пароль'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setIsTouched(true);
        }}
        isHidden={isHidden}
        onToggleVisibility={() => setIsHidden(!isHidden)}
        isTouched={isTouched}
      />
    );
  }
};

export const Invalid: Story = {
  render: () => {
    const [value, setValue] = useState('abc'); // короткий пароль
    const [isHidden, setIsHidden] = useState(true);
    const [isTouched, setIsTouched] = useState(true); // уже тронут

    return (
      <SecureInput
        placeholder='Введите ваш пароль'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isHidden={isHidden}
        onToggleVisibility={() => setIsHidden(!isHidden)}
        isTouched={isTouched}
      />
    );
  }
};
export const VisiblePassword: Story = {
  render: () => {
    const [value, setValue] = useState('abcdefghi');
    const [isHidden, setIsHidden] = useState(false);
    const [isTouched, setIsTouched] = useState(true);

    return (
      <SecureInput
        placeholder='Введите ваш пароль'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isHidden={isHidden}
        onToggleVisibility={() => setIsHidden(!isHidden)}
        isTouched={isTouched}
      />
    );
  }
};
