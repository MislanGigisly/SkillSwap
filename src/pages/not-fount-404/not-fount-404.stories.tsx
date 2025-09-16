import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotFound404 } from './not-fount-404';

export default {
  title: 'Pages/NotFound404',
  component: NotFound404,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof NotFound404>;

export const Default: StoryObj<typeof NotFound404> = {
  render: () => <NotFound404 />
};
