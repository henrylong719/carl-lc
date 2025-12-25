function spiralOrder2(matrix: number[][]): number[] {
  // right -> down -> left -> up
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let dir = 0;
  let curr = [0, 0];
  let ans = [matrix[0][0]];
  let rows = matrix.length;
  let cols = matrix[0].length;
  let eles = rows * cols;
  let visited = new Set(['0*0']);

  while (ans.length < eles) {
    let direction = directions[dir % 4];

    let nextStep = [curr[0] + direction[0], curr[1] + direction[1]];

    if (
      nextStep[0] >= rows ||
      nextStep[1] >= cols ||
      nextStep[0] < 0 ||
      nextStep[1] < 0
    ) {
      dir++;
      continue;
    }

    const nexStepStr = nextStep[0] + '*' + nextStep[1];

    if (visited.has(nexStepStr)) {
      dir++;
      continue;
    }

    let nextEle = matrix[nextStep[0]][nextStep[1]];
    curr = nextStep;
    visited.add(nexStepStr);
    ans.push(nextEle);

    console.log('ans', ans);
  }

  return [...ans];
}
spiralOrder2([
  [23, 18, 20, 26, 25],
  [24, 22, 3, 4, 4],
  [15, 22, 2, 24, 29],
  [18, 15, 23, 28, 28],
]);

function spiralOrder(matrix: number[][]): number[] {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let dir = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  const INVALID_NUM = 101;
  const ans = [];
  let curr = [0, 0];

  while (ans.length < rows * cols) {
    const r = curr[0];
    const c = curr[1];

    ans.push(matrix[r][c]);
    matrix[r][c] = INVALID_NUM;

    if (
      r + directions[dir][0] < 0 ||
      r + directions[dir][0] >= rows ||
      c + directions[dir][1] < 0 ||
      c + directions[dir][1] >= cols ||
      matrix[r + directions[dir][0]][c + directions[dir][1]] === INVALID_NUM
    ) {
      dir++;
      dir %= 4;
    }

    curr = [r + directions[dir][0], c + directions[dir][1]];
  }

  return ans;
}
