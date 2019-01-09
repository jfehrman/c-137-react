import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Modal from './modal.component';
import Background from '../background/background.component';


storiesOf('Modal', module)
  .add('Basic Modal component', () => (
    <Modal title="Test" isVisible={true}>
      This is a resonable message for some test content!
    </Modal>
  ))
  .add('Success Modal component', () => (
    <Modal title="Test" variant="success" isVisible={true}>
      This is a resonable message for some test content!
    </Modal>
  ))
  .add('Warning Modal component', () => (
    <Modal title="Test" variant="warning" isVisible={true}>
      This is a resonable message for some test content!
    </Modal>
  ))
  .add('Danger Modal component', () => (
    <Modal title="Test" variant="danger" isVisible={true}>
      This is a resonable message for some test content!
    </Modal>
  ))
  .add('Attention Modal component', () => (
    <Modal title="Test" variant="attention" isVisible={true}>
      This is a resonable message for some test content!
    </Modal>
  ))
  .add('Modal component with background', () => (
    <Background>
      <Modal title="Test" isVisible={true}>
        This is a resonable message for some test content!
      </Modal>
    </Background>
  ));
