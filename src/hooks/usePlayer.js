import { useCallback, useState } from 'react';
import { blockGenerator } from '../blocks';
import { STAGE_WIDTH } from '../helpers/helpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    block: blockGenerator().shape,
    collided: false,
  });

  const updatePlayerPosition = ({ x, y, collided }) => {
    setPlayer((prevState) => ({
      ...prevState,
      pos: {
        x: (prevState.pos.x += x),
        y: (prevState.pos.y += y),
        collided,
      },
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      block: blockGenerator().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPosition, resetPlayer];
};
