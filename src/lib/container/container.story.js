import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './container.component';
import Background from '../background/background.component';

storiesOf('Contaner', module)
  .add('Basic Container component', () => (
    <Container>Test container</Container>
  ))
  .add('Success Container component', () => (
    <Container variant="success">Success container</Container>
  ))
  .add('Warning Container component', () => (
    <Container variant="warning">Warning container</Container>
  ))
  .add('Danger Container component', () => (
    <Container variant="danger">Danger container</Container>
  ))
  .add('Attention Container component', () => (
    <Container variant="attention">Attention container</Container>
  ))
  .add('With background', () => (
    <Background>
      <div style={{width: '50%', margin: 0, padding: 10}}>
        <Container variant="success" className="test">
          Success!
        </Container>
      </div>
    </Background>
  ));
