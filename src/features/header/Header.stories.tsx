import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Header } from '@features';
import { TUserCard } from '@api';

export default {
  title: 'SkillSwap/Header',
  component: Header,
  argTypes: {
    isLoggedIn: { control: 'boolean' },
    data: { control: 'object' },
    isFormOpen: { control: 'boolean' },
    onCloseForm: { action: 'closedForm' }
  }
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

const mockUser: TUserCard = {
  _id: '2',
  name: 'Анна',
  city: 'Казань',
  age: '26',
  gender: 'female',
  avatar: '25d1a77020008b9e3f08babd1f67f01cdb8f89d6.jpg',
  skillName: 'Английский язык',
  skillId: '15',
  skillWants: ['12', '42', '23', '5'],
  photos: [],
  description: '',
  about: ''
};

export const LoggedIn: StoryFn<typeof Header> = () => (
  <Header isLoggedIn data={mockUser} />
);

export const LoggedOut: StoryFn<typeof Header> = () => (
  <Header isLoggedIn={false} />
);

export const FormOpen: StoryFn<typeof Header> = () => (
  <Header isLoggedIn isFormOpen onCloseForm={() => {}} />
);
