import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxList } from './CheckboxList';
import { useState } from 'react';
import React from 'react';

const meta: Meta = {
  title: 'components/CheckboxList',
  component: CheckboxList,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CheckboxList>;

const CheckboxListWithState = () => {
  const optionsSkills = [
    { value: 'Бизнес и карьера' },
    { value: 'Творчество и искусство' },
    { value: 'Иностранные языки' },
    { value: 'Образование и развитие' },
    { value: 'Здоровье и лайфстайл' },
    { value: 'Дом и уют' }
  ];

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleChangeSkills = (value: string) => {
    setSelectedSkills((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <CheckboxList
        selected={selectedSkills}
        name='checkboxList_skills'
        onChange={handleChangeSkills}
        options={optionsSkills}
      />
    </>
  );
};

export const CheckboxListStory: Story = {
  render: () => <CheckboxListWithState />
};
