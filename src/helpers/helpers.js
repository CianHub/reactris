export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  // Create the rows for the stage
  // This will create an an array with 20 empty entries (STAGE_HEIGHT)
  // They will then each be filled with an array of items of value 0 and a clear string
  // The number of 0 value Arrays will be the same as STAGE_WIDTH
  // 0  and clear represents an empty cell

  return Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  );
};
