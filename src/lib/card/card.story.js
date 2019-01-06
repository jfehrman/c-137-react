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
  ))
  .add('Warning Card component', () => (
    <Card title="Card" variant="warning">
      Test content.
    </Card>
  ))
  .add('Danger Card component', () => (
    <Card title="Card" variant="danger">
      Test content.
    </Card>
  ))
  .add('Attention Card component', () => (
    <Card title="Card" variant="attention">
      Test content.
    </Card>
  ))
  .add('Card with Background', () => (
    <Background variant="danger">
      <div style={{ width: '60%', padding: 30 }}>
        <Card title="Card" variant="danger">
          Test content.
      </Card>
      </div>
    </Background>
  ));
