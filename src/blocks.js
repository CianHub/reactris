export const BLOCK = {
  0: { shape: [[0]], color: '0, 0, 0' }, // clear invisible block
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
    ],
    color: '80, 227, 230', // I shape block
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0],
    ],
    color: '36, 95, 223', // J shape block
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L'],
    ],
    color: '36, 95, 223', // J shape block
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: '223, 217, 36', // Box shape block
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0],
    ],
    color: '48, 211, 56', // S shape block
  },
  T: {
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0],
    ],
    color: '132, 61, 198', // T shape block
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0],
    ],
    color: '227, 78, 78', // Z shape block
  },
};

export const blockGenerator = () => {
  // Returns a random block from the BLOCK object
  // Will extract a random block type using the block string
  const block = 'IJLOSTZ';
  const randBlock = block[Math.floor(Math.random() * block.length)];
  return BLOCK[randBlock];
};
