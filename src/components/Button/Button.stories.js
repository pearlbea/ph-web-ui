import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withA11y } from '@storybook/addon-a11y';
import Button from './Button';


export default {
  title: 'Button',
  decorators: [withA11y, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    componentSubtitle: 'Buttons are for clicking',
    component: Button,
    descriptionSlot: 'Use the Primary button or for major action like submitted data or opening a modal.'
  }
};

export const buttonData = {
  cta: 'Submit'
};

export const actionsData = {
  onClick: action('onClick')
}

export const Primary = () => {
  /**
  * Some more text can go here
  */
  return (<Button type='primary'>Get started</Button>)
}
export const Secondary = () => <Button type='secondary'>Cancel</Button>
export const Link = () => <Button type='link'>Privacy notice</Button>
