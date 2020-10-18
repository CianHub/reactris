import { useState } from 'react';
import { randomBlock } from '../blocks';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    block: randomBlock().shape,
    collided: false,
  });

  return player;
};
