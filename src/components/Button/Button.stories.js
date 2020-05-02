import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const buttonData = {
  cta: 'Submit'
};

export const actionsData = {
  onClick: action('onClick')
}

export const Default = () => <Button {...buttonData} {...actionsData} />
