import React, { useState } from 'react';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

const Tetris = () => {
  const [stage, setStage] = useStage();
  const [player, setPlayer] = usePlayer();
  const [dropSpeed, setDropSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  console.log('re-render');
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage}></Stage>
        <aside>
          <div>
            <Display text="Score"></Display>
            <Display text="Rows"></Display>
            <Display text="Level"></Display>
          </div>
          <StartButton></StartButton>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
