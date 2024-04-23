function formingMagicSquare(s: number[][]): number {
  let counter = 0;
  const leftDiag = s[0][2] + s[1][1] + s[2][0];
  const rightDiag = s[0][0] + s[1][1] + s[2][2];

  const row1 = s[0][0] + s[0][1] + s[0][2];
  const row2 = s[1][0] + s[1][1] + s[1][2];
  const row3 = s[2][0] + s[2][1] + s[2][2];

  const col1 = s[0][0] + s[1][0] + s[2][0];
  const col2 = s[0][1] + s[1][1] + s[2][1];
  const col3 = s[0][2] + s[1][2] + s[2][2];

  const numbers = [leftDiag, rightDiag, row1, row2, row3, col1, col2, col3];

  const max = Math.max(...numbers);

  const matrix = [
    [row1, row2, row3],
    [col1, col2, col3],
  ];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log('i', i);
      console.log('j', j);
    }
  }
  return 0;
}

formingMagicSquare([
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
]);
