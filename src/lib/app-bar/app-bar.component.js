// @flow
import React from 'react';
import determineVariant from '../shared/determine-variant';

import './app-bar.component.scss';

export type Props = {
  children?: React.Node,
  variant?: string,
  className?: string,
  invert?: boolean,
};

const AppBar = ({ children, variant, className, invert }) => (
  <div className={`app-bar${determineVariant(variant)}${invert ? '--invert' : ''} ${className}`}>
    {children}
  </div>
);

export default AppBar;
