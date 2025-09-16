import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { StepIndicator } from './step-indicator';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default {
  title: 'StepIndicator',
  component: StepIndicator
} as Meta;

const Template: StoryFn<StepIndicatorProps> = (args) => (
  <StepIndicator {...args} />
);

export const Step1of3 = Template.bind({});
Step1of3.args = {
  currentStep: 1,
  totalSteps: 3
};

export const Step2of3 = Template.bind({});
Step2of3.args = {
  currentStep: 2,
  totalSteps: 3
};

export const Step3of3 = Template.bind({});
Step3of3.args = {
  currentStep: 3,
  totalSteps: 3
};
