import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { BLOCK } from '../blocks';

const Cell = ({ type }) => {
  return <StyledCell type={type} color={type}></StyledCell>;
};

export default Cell;
