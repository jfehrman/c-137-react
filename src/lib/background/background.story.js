import React from 'react';
import { storiesOf } from '@storybook/react';
import Background from './background.component';

storiesOf('Background', module)
  .add('Basic background component', () => (
    <Background />
  ))
  .add('Success background component', () => (
    <Background variant="success" />
  ))
  .add('Warning background component', () => (
    <Background variant="warning" />
  ))
  .add('Danger background component', () => (
    <Background variant="danger" />
  ))
  .add('Attention background component', () => (
    <Background variant="attention" />
  ));