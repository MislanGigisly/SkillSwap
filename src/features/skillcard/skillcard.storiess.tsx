// import { Meta, StoryObj } from '@storybook/react';
// import { SkillCard } from './skillcard';
// import { TUser, TSkill } from '@app/styles/typs';

// type Story = StoryObj<typeof SkillCard>;

// const mockUser: TUser = {
//   _id: '1',
//   name: 'Иван Иванов',
//   city: 'Москва',
//   age: '28',
//   gender: 'male',
//   image: 'avatar1.jpg',
//   skillName: 'Управление проектами',
//   skillId: '7',
//   skillWants: ['15', '28', '22'],
//   like: 5,
//   cratedAt: '2023-01-15'
// };

// const mockTeachSkill: TSkill = {
//   _id: '7',
//   name: 'Управление проектами',
//   parent_id: '1'
// };

// const mockLearnSkills: TSkill[] = [
//   { _id: '15', name: 'Английский язык', parent_id: '2' },
//   { _id: '28', name: 'Графический дизайн', parent_id: '4' },
//   { _id: '22', name: 'Фотография', parent_id: '4' }
// ];

// const meta: Meta<typeof SkillCard> = {
//   tags: ['autodocs'],
//   title: 'Components/SkillCard',
//   component: SkillCard,
//   argTypes: {
//     isLiked: { control: 'boolean' },
//     onLikeToggle: { action: 'liked' },
//     onDetailsClick: { action: 'details clicked' },
//     learnSkills: {
//       control: {
//         type: 'object'
//       }
//     }
//   }
// };

// export default meta;

// export const Default: Story = {
//   args: {
//     data: mockUser,
//     teachSkills: mockTeachSkill,
//     learnSkills: mockLearnSkills
//   }
// };

// export const LikedCard: Story = {
//   args: {
//     data: mockUser,
//     teachSkills: mockTeachSkill,
//     learnSkills: mockLearnSkills,
//     isLiked: true
//   }
// };

// export const FemaleUser: Story = {
//   args: {
//     data: {
//       ...mockUser,
//       _id: '2',
//       name: 'Мария Петрова',
//       gender: 'female',
//       age: '32',
//       city: 'Санкт-Петербург',
//       image: 'avatar2.jpg',
//       skillName: 'Графический дизайн',
//       skillId: '29'
//     },
//     teachSkills: {
//       _id: '29',
//       name: 'Графический дизайн',
//       parent_id: '4'
//     },
//     learnSkills: [
//       { _id: '7', name: 'Управление проектами', parent_id: '1' },
//       { _id: '36', name: 'Обучение детей', parent_id: '5' }
//     ]
//   }
// };

// export const ManySkills: Story = {
//   args: {
//     data: {
//       ...mockUser,
//       _id: '3',
//       skillName: 'Кулинария',
//       skillId: '25',
//       skillWants: ['15', '16', '17', '18', '19']
//     },
//     teachSkills: {
//       _id: '25',
//       name: 'Кулинария',
//       parent_id: '3'
//     },
//     learnSkills: [
//       { _id: '15', name: 'Английский язык', parent_id: '2' },
//       { _id: '16', name: 'Испанский язык', parent_id: '2' },
//       { _id: '17', name: 'Французский язык', parent_id: '2' },
//       { _id: '18', name: 'Немецкий язык', parent_id: '2' }
//     ]
//   }
// };

// export const YoungUser: Story = {
//   args: {
//     data: {
//       ...mockUser,
//       _id: '4',
//       name: 'Алексей Смирнов',
//       age: '19',
//       skillName: 'Программирование',
//       skillId: '36'
//     },
//     teachSkills: {
//       _id: '36',
//       name: 'Программирование',
//       parent_id: '1'
//     },
//     learnSkills: [
//       { _id: '42', name: 'Фитнес', parent_id: '6' },
//       { _id: '43', name: 'Здоровое питание', parent_id: '6' }
//     ]
//   }
// };

// export const WithoutAdditionalSkills: Story = {
//   args: {
//     data: {
//       ...mockUser,
//       _id: '5',
//       skillWants: []
//     },
//     teachSkills: mockTeachSkill,
//     learnSkills: []
//   }
// };
