import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@features';
import './Footer.module.css';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: {
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '800px'
          }
        },
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        }
      },
      defaultViewport: 'desktop'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Footer>;

// Базовая версия футера
export const Default: Story = {
  render: () => (
    <div style={{ width: '100vw' }}>
      <Footer />
    </div>
  )
};

// Десктопная версия

export const Desktop: Story = {
  render: () => (
    <div style={{ width: '100vw' }}>
      <Footer />
    </div>
  )
};

// Мобильная версия
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  },
  render: () => <Footer />
};
