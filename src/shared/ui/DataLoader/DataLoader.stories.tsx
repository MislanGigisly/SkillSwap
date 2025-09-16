import type { Meta, StoryObj } from '@storybook/react';
import DataLoader from './DataLoader';
import React, { useState } from 'react';

const meta: Meta<typeof DataLoader> = {
  title: 'components/DataLoader',
  component: DataLoader,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DataLoaderStory: Story = {
  render: () => <DataLoader />
};
