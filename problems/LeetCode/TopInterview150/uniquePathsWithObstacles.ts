function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;

  const dp = new Array(rows + 1).fill(0);

  for (let i = 0; i <= rows; i++) {
    dp[i] = new Array(cols + 1).fill(0);
  }

  dp[1][1] = 1;

  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      if ((r === 1 && c === 1) || obstacleGrid[r - 1][c - 1] === 1) {
        continue;
      }

      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
    }
  }

  console.log(dp);

  return dp[rows][cols];
}

uniquePathsWithObstacles([
  [0, 1],
  [0, 0],
]);

function uniquePathsWithObstacles2(obstacleGrid: number[][]): number {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1 || obstacleGrid[rows - 1][cols - 1] === 1)
    return 0;

  let dp = new Array(rows).fill(0);

  for (let r = 0; r < rows; r++) {
    dp[r] = new Array(cols).fill(0);
  }

  dp[0][0] = 1;

  // populate first row
  for (let c = 0; c < cols; c++) {
    if (obstacleGrid[0][c] === 1) break;
    dp[0][c] = 1;
  }

  // populate first col
  for (let r = 0; r < rows; r++) {
    if (obstacleGrid[r][0] === 1) break;
    dp[r][0] = 1;
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (obstacleGrid[r][c] === 1) continue;
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
    }
  }

  return dp[rows - 1][cols - 1];
}

// Time: O(n^2)
// Space: O(n^2)

function uniquePathsWithObstacles3(obstacleGrid: number[][]): number {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1 || obstacleGrid[rows - 1][cols - 1] === 1)
    return 0;

  const dp = new Array(cols).fill(0);
  dp[0] = 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (obstacleGrid[r][c] === 1) {
        dp[c] = 0;
        continue;
      }
      if (c > 0) {
        dp[c] = dp[c] + dp[c - 1];
      }
    }
  }
  return dp[cols - 1];
}

// Time: O(n^2)
// Space: O(n)
