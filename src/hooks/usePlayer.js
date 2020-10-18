import { useState } from 'react';
import { blockGenerator } from '../blocks';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    block: blockGenerator().shape,
    collided: false,
  });

  return [player, setPlayer];
};
