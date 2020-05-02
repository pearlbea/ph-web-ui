import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withA11y } from '@storybook/addon-a11y';
import Button from './Button';


export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    description: "Buttons are for clicking"
  }
};

export const buttonData = {
  cta: 'Submit'
};

export const actionsData = {
  onClick: action('onClick')
}

export const Primary = () => <Button type='primary' cta='Submit' />
export const Secondary = () => <Button type='secondary' cta='Cancel' />
export const Link = () => <Button type='link' cta='Privacy Policy' />