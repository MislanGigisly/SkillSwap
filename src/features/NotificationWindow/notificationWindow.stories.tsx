import { Meta, StoryObj } from '@storybook/react';
import { NotificationWindow } from './notificationWindow';

type Story = StoryObj<typeof NotificationWindow>;

const meta: Meta<typeof NotificationWindow> = {
  tags: ['autodocs'],
  title: 'NotificationWindow',
  component: NotificationWindow
};

export const First: Story = {
  args: {
    newNotifications: [
      {
        _id: '3',
        username: 'Николай',
        notificationType: 'принял ваш обмен',
        date: '07.05.2025'
      },
      {
        _id: '4',
        username: 'Татьяна',
        notificationType: 'предлагает вам обмен',
        date: '07.04.2025'
      }
    ],
    oldNotifucations: [
      {
        _id: '1',
        username: 'Олег',
        notificationType: 'предлагает вам обмен',
        date: '07.03.2025'
      },
      {
        _id: '2',
        username: 'Игорь',
        notificationType: 'принял ваш обмен',
        date: '06.29.2025'
      }
    ]
  }
};

export const Second: Story = {
  args: {
    newNotifications: [
      {
        _id: '3',
        username: 'Николай',
        notificationType: 'принял ваш обмен',
        date: '07.05.2025'
      },
      {
        _id: '4',
        username: 'Татьяна',
        notificationType: 'предлагает вам обмен',
        date: '07.04.2025'
      }
    ]
  }
};

export const Third: Story = {
  args: {
    oldNotifucations: [
      {
        _id: '1',
        username: 'Олег',
        notificationType: 'предлагает вам обмен',
        date: '07.03.2025'
      },
      {
        _id: '2',
        username: 'Игорь',
        notificationType: 'принял ваш обмен',
        date: '06.29.2025'
      }
    ]
  }
};

export const Fourth: Story = {};

export default meta;
