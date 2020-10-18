import { useEffect, useState } from 'react';
import { createStage } from '../helpers/helpers';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage(player, resetPlayer));

  useEffect(() => {
    const updateStage = (prevStage) => {
      // re-render empty cells
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      //  draw the player block
      player.block.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player.collided, player.pos.x, player.pos.y, player.block]);

  return [stage, setStage];
};
