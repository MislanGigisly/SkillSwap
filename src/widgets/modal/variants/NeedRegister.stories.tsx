import { useState } from 'react';
import { NeedRegister } from './NeedRegister';
import { MemoryRouter } from 'react-router-dom';
import type { StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Modals/NeedRegister',
  component: NeedRegister,
  tags: ['autodocs']
};

export const Default = () => {
  const [open, setOpen] = useState(true);
  return open ? (
    <NeedRegister onClose={() => setOpen(false)} onRegister={() => {}} />
  ) : null;
};
