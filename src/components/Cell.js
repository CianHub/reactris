import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { BLOCK } from '../blocks';

const Cell = ({ type }) => {
  return (
    <StyledCell type={'L'} color={BLOCK['L'].color}>
      Cell
    </StyledCell>
  );
};

export default Cell;
