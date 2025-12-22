function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  // dfs
  const dfs = (i: number, j: number) => {
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (grid[i][j] !== '1') return;

    // mark visited
    grid[i][j] = '0';

    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i + 1, j);
    dfs(i, j - 1);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== '1') continue;
      dfs(i, j);
      count++;
    }
  }

  return count;
}

const direction = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  // dfs
  const dfs = (i: number, j: number) => {
    const stack = [[i, j]];

    while (stack.length) {
      const [row, col] = stack.pop();

      if (row < 0 || col < 0 || row >= m || col >= n) continue;
      if (grid[row][col] !== '1') continue;

      grid[row][col] = '0';

      for (const dir of direction) {
        stack.push([row + dir[0], col + dir[1]]);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== '1') continue;
      dfs(i, j);
      count++;
    }
  }

  return count;
}

function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const direction = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  let count = 0;

  // bfs
  const bfs = (i: number, j: number) => {
    const queue = [[i, j]];
    let head = 0;

    while (head < queue.length) {
      const [row, col] = queue[head++];

      if (row < 0 || col < 0 || row >= m || col >= n) continue;
      if (grid[row][col] !== '1') continue;

      grid[row][col] = '0';

      for (const dir of direction) {
        queue.push([row + dir[0], col + dir[1]]);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== '1') continue;
      bfs(i, j);
      count++;
    }
  }

  return count;
}
