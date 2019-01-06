// @flow
import React from 'react';

import './background.component.scss';

export type Props = {
  children?: React.Node,
  variant?: string,
};

export const determineVariant = (variant: string = 'default') => {
  switch (variant) {
    case 'success':
      return '--success';
    case 'warning':
      return '--warning';
    case 'danger':
      return '--danger';
    case 'attention':
      return '--attention';
    default:
      return '';
  }
}

const Background = ({ children, variant }: Props) => (
  <div
    className={`background${determineVariant(variant)}`}
  >
    {children}
  </div>
);

export default Background;
