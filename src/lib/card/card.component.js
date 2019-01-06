// @flow
import React from 'react';
import determineVariant from '../shared/determine-variant';
import AppBar from '../app-bar/app-bar.component';
import Container from '../container/container.component';

import './card.component.scss';

export type Props = {
  children: React.Node,
  variant?: string,
  className?: string,
  title: boolean,
};

const Card = ({ children, variant, className, title }: Props) => (
  <Container variant={variant} className="card">
    <AppBar variant={variant} className="card__title">
      <h3>
        {title}
      </h3>
    </AppBar>
    <div className="card__content">
      {children}
    </div>
  </Container>
);

export default Card;
