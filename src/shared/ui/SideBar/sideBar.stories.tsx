import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import SideBar from './sideBar';

type Story = StoryObj<typeof SideBar>;

const meta: Meta<typeof SideBar> = {
  tags: ['autodocs'],
  title: 'Ui/SideBar',
  component: SideBar
};

export default meta;

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<
      'requests' | 'trades' | 'favorites' | 'skills' | 'personal'
    >('requests');

    return (
      <SideBar
        activeTab={activeTab}
        onChangeTab={(tab) => {
          setActiveTab(tab);
          console.log('Selected tab:', tab);
        }}
      />
    );
  }
};
