import { Meta, StoryObj } from '@storybook/react';
import { TextBlock } from './textBlock';

const meta: Meta<typeof TextBlock> = {
  title: 'Features/TextBlock',
  component: TextBlock,
  args: {
    value: '',
    maxLength: 500
  }
};
export default meta;

type Story = StoryObj<typeof TextBlock>;

export const Default: Story = {};
