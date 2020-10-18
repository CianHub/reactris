import React from 'react';
import { StyledDisplay } from './styles/styleDisplay';

const Display = ({ gameOver, text }) => {
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;
};

export default Display;
