import React, { useState } from 'react';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { createStage } from '../helpers/helpers';

const Tetris = () => {
  const [player, updatePlayerPosition, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);
  const [dropSpeed, setDropSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  console.log('re-render');

  const movePlayer = (direction) => {
    // Player horizontal movement
    updatePlayerPosition({ x: direction, y: 0 });
  };

  const startGame = () => {
    // Reset all
    setStage(createStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPosition({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    // When player presses down arrow block falls faster
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        // left keyboard arrow
        movePlayer(-1);
      }
      if (keyCode === 39) {
        // right keyboard arrow
        movePlayer(1);
      }
      if (keyCode === 40) {
        // down keyboard arrow
        dropPlayer();
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage}></Stage>
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver}></Display>
          ) : (
            <div>
              <Display text="Score"></Display>
              <Display text="Rows"></Display>
              <Display text="Level"></Display>
            </div>
          )}
          <StartButton onClick={() => startGame()}></StartButton>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
