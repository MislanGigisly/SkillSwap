import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { IText } from './types';

const meta: Meta = {
  title: 'Text',
  component: Text,
  args: {
    color: 'text'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Text>;

const TextTemplate = (args: IText) => (
  <Text {...args}>The quick brown fox jumps over the lazy dog.</Text>
);

export const H1: Story = {
  render: TextTemplate,
  args: {
    as: 'h1'
  }
};

export const H2: Story = {
  render: TextTemplate,
  args: {
    as: 'h2'
  }
};

export const H3: Story = {
  render: TextTemplate,
  args: {
    as: 'h3'
  }
};

export const H4: Story = {
  render: TextTemplate,
  args: {
    as: 'h4'
  }
};

export const BodyText: Story = {
  render: TextTemplate,
  args: {
    as: 'bodyText'
  }
};

export const Caption: Story = {
  render: TextTemplate,
  args: {
    as: 'caption'
  }
};
