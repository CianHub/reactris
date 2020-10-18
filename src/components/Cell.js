import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { BLOCK } from '../blocks';

const Cell = ({ type }) => {
  return <StyledCell type={'I'} color={BLOCK['I'].color}></StyledCell>;
};

export default Cell;
