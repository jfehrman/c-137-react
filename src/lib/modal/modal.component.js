// @flow
import React from 'react';
import determineVariant from '../shared/determine-variant';
import AppBar from '../app-bar/app-bar.component';

import './modal.component.scss';

export type Props = {
  children: React.Node,
  variant?: string,
  className?: string,
  title: string,
  isVisible?: boolean
};

const Modal = ({ children, variant, className, title, isVisible }: Props) => {
  return (isVisible) ? (
    <div className="modal__background">
      <div
        className={`modal${determineVariant(variant)} ${className}`}
      >
        <AppBar invert variant={variant}>
          <h3>{title}</h3>
        </AppBar>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  ) : null;
};

Modal.defaultProps = {
  isVisible: false,
  className: ''
};

export default Modal;
