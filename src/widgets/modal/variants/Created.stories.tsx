import { Created } from './Created';
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Created> = {
  title: 'Modals/Created',
  component: Created,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Created>;

const RenderModal = () => {
  const [open, setOpen] = useState(true);
  return open ? <Created onClose={() => setOpen(false)} /> : null;
};

export const Default: Story = {
  render: () => <RenderModal />
};
