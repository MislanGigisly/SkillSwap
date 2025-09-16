import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';
import { useState } from 'react';
import React from 'react';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Logo>;

// Базовая версия футера
export const Default: Story = {
  render: () => (
    <div style={{ width: '100vw' }}>
      <Logo />
    </div>
  )
};
