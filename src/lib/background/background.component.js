// @flow
import React from 'react';
import determineVariant from '../shared/determine-variant';

import './background.component.scss';

export type Props = {
  children?: React.Node,
  variant?: string,
  className?: string,
};

const Background = ({ children, variant, className }: Props) => (
  <div
    className={`background${determineVariant(variant)} ${className}`}
  >
    {children}
  </div>
);

export default Background;
