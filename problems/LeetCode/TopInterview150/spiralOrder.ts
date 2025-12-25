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

function spiralOrder2(matrix: number[][]): number[] {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let dirIdx = 0;

  let r = 0;
  let c = 0;

  const rows = matrix.length;
  const cols = matrix[0].length;

  const INVALID_NUM = 101;

  const ans = [];

  while (ans.length < rows * cols) {
    ans.push(matrix[r][c]);
    matrix[r][c] = INVALID_NUM;

    // check if the next step is valid
    const dr = directions[dirIdx][0];
    const dc = directions[dirIdx][1];
    if (
      r + dr < 0 ||
      r + dr >= rows ||
      c + dc < 0 ||
      c + dc >= cols ||
      matrix[r + dr][c + dc] === INVALID_NUM
    ) {
      // change direction
      dirIdx += 1;
      dirIdx %= 4;
    }

    r += directions[dirIdx][0];
    c += directions[dirIdx][1];
  }

  return ans;
}
