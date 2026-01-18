function minPathSum(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  dp[0][0] = grid[0][0];

  // first row
  for (let c = 1; c < cols; c++) {
    dp[0][c] = dp[0][c - 1] + grid[0][c];
  }

  // first col
  for (let r = 1; r < rows; r++) {
    dp[r][0] = dp[r - 1][0] + grid[r][0];
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      dp[r][c] = grid[r][c] + Math.min(dp[r - 1][c], dp[r][c - 1]);
    }
  }

  return dp[rows - 1][cols - 1];
}

// Time: O(m*n)
// Space: O(m*n)

function minPathSum2(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const dp = new Array(cols).fill(0);

  dp[0] = grid[0][0];

  // first row
  for (let c = 1; c < cols; c++) {
    dp[c] = dp[c - 1] + grid[0][c];
  }

  for (let r = 1; r < rows; r++) {
    dp[0] = dp[0] + grid[r][0];
    for (let c = 1; c < cols; c++) {
      dp[c] = grid[r][c] + Math.min(dp[c], dp[c - 1]);
    }
  }

  return dp[cols - 1];
}
2;
// Time: O(m*n)
// Space: O(n)

function minPathSum(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const cache = Array.from({ length: rows }, () => Array(cols).fill(-1));

  const dfs = (r: number, c: number) => {
    if (r >= rows || c >= cols) return Infinity;

    if (r === rows - 1 && c === cols - 1) return grid[rows - 1][cols - 1];

    if (cache[r][c] !== -1) return cache[r][c];

    const right = dfs(r, c + 1);
    const bottom = dfs(r + 1, c);

    cache[r][c] = grid[r][c] + Math.min(right, bottom);

    return cache[r][c];
  };

  return dfs(0, 0);
}

// Time: O(m*n)
// Space: O(m*n)
