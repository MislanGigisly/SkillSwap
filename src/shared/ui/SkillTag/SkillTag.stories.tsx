import type { Meta, StoryObj } from '@storybook/react';
import SkillTag from './skill-tag';
import React, { useState } from 'react';

const meta: Meta<typeof SkillTag> = {
  title: 'SkillTag',
  component: SkillTag,
  tags: ['autodocs'],
  argTypes: {
    skill: { control: 'text' },
    onClose: { action: 'onClose' }
  },
  decorators: [
    (Story) => {
      const wrapperStyle = {
        backgroundColor: '#f0f0f0',
        padding: '20px'
      };
      return (
        <div style={wrapperStyle}>
          <Story />
        </div>
      );
    }
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    skill: 'Английский'
  },
  render: (args) => {
    const [skills, setSkills] = useState(['Английский', 'JavaScript']);

    const handleRemove = (skillToRemove: string) => {
      setSkills((prevSkills) =>
        prevSkills.filter((skill) => skill !== skillToRemove)
      );
    };

    return (
      <div>
        {skills.map((skill) => (
          <SkillTag
            key={skill}
            skill={skill}
            onClose={() => handleRemove(skill)}
          />
        ))}
      </div>
    );
  }
};
