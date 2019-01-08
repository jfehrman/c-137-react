// @flow
import React from 'react';
import determineVariant from '../shared/determine-variant';

import './button.component.scss';

export type Props = {
  children?: React.Node,
  variant?: string,
  className?: string,
};

const Button = ({ children, variant, className, ...other }: Props) => (
  <button
    className={`button${determineVariant(variant)} ${className}`}
    {...other}
  >
    {children}
  </button>
);

export default Button;
