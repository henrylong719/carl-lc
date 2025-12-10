function spiralOrder(matrix: number[][]): number[] {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let x = 0;
  let y = 0;

  // start with moving right
  let dx = 1;
  let dy = 0;

  let INVALID_NUM = 101;
  let ans = [];

  while (ans.length < rows * cols) {
    const val = matrix[y][x];
    ans.push(val);
    matrix[y][x] = INVALID_NUM;

    // check if current step is out of bound or a repetitive step

    if (
      !(x + dx < cols && x + dx >= 0 && y + dy < rows && y + dy >= 0) ||
      matrix[y + dy][x + dx] === INVALID_NUM
    ) {
      [dx, dy] = [-dy, dx];
    }

    x += dx;
    y += dy;
  }

  return ans;
}
