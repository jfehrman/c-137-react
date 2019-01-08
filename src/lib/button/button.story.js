import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button.component';

storiesOf('Button', module)
  .add('Basic Button component', () => (
    <Button>
      Test!
    </Button>
  ))
  .add('Success Button component', () => (
    <Button variant="success">
      Test!
    </Button>
  ))
  .add('Warning Button component', () => (
    <Button variant="warning">
      Test!
    </Button>
  ))
  .add('Danger Button component', () => (
    <Button variant="danger">
      Test!
    </Button>
  ))
  .add('Attention Button component', () => (
    <Button variant="attention">
      Test!
    </Button>
  ));
