import type { Meta, StoryObj } from '@storybook/react';
import { FiltersArea } from './FiltersArea';
import React from 'react';

const meta: Meta<typeof FiltersArea> = {
  title: 'components/FiltersArea',
  component: FiltersArea,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof FiltersArea>;

export const FiltersAreaStory: Story = {
  render: () => <FiltersArea />
};
