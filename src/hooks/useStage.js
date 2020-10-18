import { useState } from 'react';
import { createStage } from '../helpers/helpers';

export const useStage = () => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
};
