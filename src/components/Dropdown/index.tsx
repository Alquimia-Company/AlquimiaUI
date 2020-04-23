import React from 'react';

import { Container } from './styles';

export interface Props {
  background?: string;
  color?: string
}

export const Dropdown: React.FC<Props> = ({
  background = '#38b6FF',
  color = '#FFF',
  ...props
}) => {
  return (
    <Container
      background = {background}
      color = {color}
      {...props}
    >
      <option>OI</option>
      <option>OI</option>
      <option>OI</option>
    </Container>
  )
};