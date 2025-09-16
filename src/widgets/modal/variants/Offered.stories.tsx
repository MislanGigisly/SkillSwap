import { useState } from 'react';
import { Offered } from './Offered';
import React from 'react';

export default {
  title: 'Modals/Offered',
  component: Offered,
  tags: ['autodocs']
};

export const Default = () => {
  const [open, setOpen] = useState(true);
  return open ? <Offered onClose={() => setOpen(false)} /> : null;
};
