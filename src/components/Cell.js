import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { BLOCK } from '../blocks';

const Cell = ({ type }) => {
  return <StyledCell type={type} color={BLOCK[type]?.color}></StyledCell>;
};

export default Cell;
