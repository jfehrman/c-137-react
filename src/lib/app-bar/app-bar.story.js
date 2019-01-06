import React from 'react';
import { storiesOf } from '@storybook/react';
import AppBar from './app-bar.component';
import Background from '../background/background.component';
import Container from '../container/container.component';

storiesOf('App-Bar', module)
  .add('Basic AppBar component', () => (
    <AppBar>
      <h1>
        Test App
      </h1>
    </AppBar>
  ))
  .add('Inverted AppBar component', () => (
    <AppBar invert>
      <h1>
        Test App
      </h1>
    </AppBar>
  ))
  .add('Success AppBar component', () => (
    <AppBar variant="success">
      <h1>
        Test App
      </h1>
    </AppBar>
  ))
  .add('Inverted Success AppBar component', () => (
    <AppBar variant="success" invert>
      <h1>
        Test App
      </h1>
    </AppBar>
  ))
  .add('Warning AppBar component', () => (
    <AppBar variant="warning">
      <h1>
        Test App
      </h1>
    </AppBar>
  ))
  .add('Inverted Warning AppBar component', () => (
    <AppBar variant="warning" invert>
      <h1>
        Test App
      </h1>
    </AppBar>
  ))
  .add('Danger AppBar component', () => (
    <AppBar variant="danger">
      <h1>
        Test App
      </h1>
    </AppBar>
  ))
  .add('Inverted Danger AppBar component', () => (
    <AppBar variant="danger" invert>
      <h1>
        Test App
      </h1>
    </AppBar>
  ))
  .add('Attention AppBar component', () => (
    <AppBar variant="attention">
      <h1>
        Test App
      </h1>
    </AppBar>
  ))
  .add('Inverted Attention AppBar component', () => (
    <AppBar variant="attention" invert>
      <h1>
        Test App
      </h1>
    </AppBar>
  ))
  .add('With background and inside of a container', () => (
    <Background>
      <div style={{width: '80%', margin: 0, padding: 10}}>
        <Container variant="attention">
          <AppBar variant="attention" invert>
            <h1>
              Test app
          </h1>
          </AppBar>
          Much more content here.
      </Container>
      </div>
    </Background>
  ));
