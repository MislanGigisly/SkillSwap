import type { Meta, StoryObj } from '@storybook/react';
import NotificationItem from './notification-item';

const meta: Meta<typeof NotificationItem> = {
  title: 'NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color', description: 'Фон уведомления' },
    textColor: { control: 'color', description: 'Цвет текста' },
    onAction: {
      control: 'function',
      description: 'Функция, вызываемая при нажатии "Перейти"'
    },
    onClose: {
      control: 'function',
      description: 'Функция, вызываемая при закрытии уведомления'
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Олег предлагает вам обмен',
    onClose: () => {},
    onAction: () => {}
  }
};

export const CustomColors: Story = {
  args: {
    text: 'Олег предлагает вам обмен',
    backgroundColor: 'alarm',
    textColor: 'accent',
    onClose: () => {},
    onAction: () => {}
  }
};
