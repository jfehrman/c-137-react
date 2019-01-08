import React from 'react';
import { action } from '@storybook/addon-actions';
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
  ))
  .add('Button component click test', () => (
    <Button variant="warning" onClick={action('Click')}>
      Test!
    </Button>
  ));
