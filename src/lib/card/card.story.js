import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './card.component';
import Background from '../background/background.component';

storiesOf('Card', module)
  .add('Basic Card component', () => (
    <Card title="Card">
      Test content.
    </Card>
  ))
  .add('Success Card component', () => (
    <Card title="Card" variant="success">
      Test content.
    </Card>
  ));
