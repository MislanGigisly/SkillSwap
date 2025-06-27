import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

type Story = StoryObj<typeof Tag>;

const meta: Meta<typeof Tag> = {
  tags: ['autodocs'],
  title: 'Tag',
  component: Tag
};

export const First: Story = {
  args: {
    text: 'Бизнес-план',
    textColor: 'text',
    backgroundColor: 'tag-business'
  }
};

export const Second: Story = {
  args: {
    text: 'Игра на барабанах',
    textColor: 'text',
    backgroundColor: 'tag-creativity'
  }
};

export const Third: Story = {
  args: {
    text: 'Английский язык',
    textColor: 'text',
    backgroundColor: 'tag-languages'
  }
};

export const Fourth: Story = {
  args: {
    text: 'Реставрация мебели',
    textColor: 'text',
    backgroundColor: 'tag-home'
  }
};

export const Fifth: Story = {
  args: {
    textColor: 'text',
    backgroundColor: 'tag-default'
  }
};

export default meta;
