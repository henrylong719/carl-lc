function alternate(s: string): number {
  if (s.length === 1) return 0;

  const NUM_LETTERS = 26;

  let pair: number[][] = [];
  let count: number[][] = [];

  for (let i = 0; i < NUM_LETTERS; i++) {
    pair[i] = [];
    count[i] = [];
    for (let j = 0; j < NUM_LETTERS; j++) {
      pair[i][j] = 0;
      count[i][j] = 0;
    }
  }

  for (let char of s) {
    const code = char.charCodeAt(0) - 'a'.charCodeAt(0);

    // update row
    for (let col = 0; col < NUM_LETTERS; col++) {
      if (pair[code][col] === code) {
        count[code][col] = -1;
      }
      if (count[code][col] !== -1) {
        pair[code][col] = code;
        count[code][col]++;
      }
    }

    // update col
    for (let row = 0; row < NUM_LETTERS; row++) {
      if (pair[row][code] === code) {
        count[row][code] = -1;
      }

      if (count[row][code] !== -1) {
        pair[row][code] = code;
        count[row][code]++;
      }
    }
  }

  let max = 0;

  for (let row = 0; row < NUM_LETTERS; row++) {
    for (let col = 0; col < NUM_LETTERS; col++) {
      let value = count[row][col];
      max = Math.max(max, value);
    }
  }

  return max;
}

console.log(alternate('beabeefeab'));
