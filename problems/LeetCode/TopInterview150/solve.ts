/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const m = board.length;
  if (m === 0) return;
  const n = board[0].length;
  if (n === 0) return;
  const direction = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  const dfs = (i: number, j: number) => {
    const stack = [[i, j]];

    while (stack.length) {
      const [r, c] = stack.pop();

      if (r < 0 || c < 0 || r >= m || c >= n) continue;
      if (board[r][c] !== 'O') continue;

      board[r][c] = '#';

      for (let dir of direction) {
        stack.push([r + dir[0], c + dir[1]]);
      }
    }
  };

  // mark vertical border
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') dfs(i, 0);
    if (board[i][n - 1] === 'O') dfs(i, n - 1);
  }

  // mark horizontal border
  for (let j = 0; j < n; j++) {
    if (board[0][j] === 'O') dfs(0, j);
    if (board[m - 1][j] === 'O') dfs(m - 1, j);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }
}

function solve(board: string[][]): void {
  const m = board.length;
  if (m === 0) return;
  const n = board[0].length;
  if (n === 0) return;
  const direction = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  const bfs = (i: number, j: number) => {
    const queue = [[i, j]];
    let ptr = 0;

    while (ptr < queue.length) {
      const [r, c] = queue[ptr++];

      if (r < 0 || c < 0 || r >= m || c >= n) continue;
      if (board[r][c] !== 'O') continue;

      board[r][c] = '#';

      for (let dir of direction) {
        queue.push([r + dir[0], c + dir[1]]);
      }
    }
  };

  // mark vertical border
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') bfs(i, 0);
    if (board[i][n - 1] === 'O') bfs(i, n - 1);
  }

  // mark horizontal border
  for (let j = 0; j < n; j++) {
    if (board[0][j] === 'O') bfs(0, j);
    if (board[m - 1][j] === 'O') bfs(m - 1, j);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }
}

// Time: O(m*n)
// Space: O(m*n)
