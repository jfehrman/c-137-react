// @flow
import React from 'react';
import determineVariant from '../shared/determine-variant';

import './container.component.scss';

export type Props = {
  children?: React.Node,
  variant?: string,
  className?: string,
};

const Container = ({ children, variant, className }) => (
  <div className={`container${determineVariant(variant)} ${className}`}>
    {children}
  </div>
);

export default Container;
