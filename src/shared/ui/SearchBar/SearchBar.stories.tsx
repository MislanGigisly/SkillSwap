import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './search-bar';
import React from 'react';

const meta: Meta<typeof SearchBar> = {
  title: 'SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    submit: { action: 'submit' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const wrapperStyle = {
  backgroundColor: '#f0f0f0',
  padding: '20px'
};

export const Default: Story = {
  args: {
    placeholder: 'Искать навык',
    submit: (text: string) => {}
  },
  decorators: [
    (Story) => (
      <div style={wrapperStyle}>
        <Story />
      </div>
    )
  ]
};

export const WithText: Story = {
  args: {
    placeholder: 'Искать навык',
    searchText: 'React'
  },
  decorators: [
    (Story) => (
      <div style={wrapperStyle}>
        <Story />
      </div>
    )
  ]
};

export const CustomColor: Story = {
  args: {
    placeholder: 'Искать навык',
    color: 'accent'
  },
  decorators: [
    (Story) => (
      <div style={wrapperStyle}>
        <Story />
      </div>
    )
  ]
};

export const CustomBackgroundColor: Story = {
  args: {
    placeholder: 'Искать навык',
    backgroundColor: 'alarm'
  },
  decorators: [
    (Story) => (
      <div style={wrapperStyle}>
        <Story />
      </div>
    )
  ]
};

export const CustomPlaceholderColor: Story = {
  args: {
    placeholder: 'Искать навык',
    placeholderColor: 'error'
  },
  decorators: [
    (Story) => (
      <div style={wrapperStyle}>
        <Story />
      </div>
    )
  ]
};

export const CustomSize: Story = {
  args: {
    placeholder: 'Искать навык',
    size: 'large'
  },
  decorators: [
    (Story) => (
      <div style={wrapperStyle}>
        <Story />
      </div>
    )
  ]
};
