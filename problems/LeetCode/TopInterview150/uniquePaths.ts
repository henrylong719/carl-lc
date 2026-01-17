function uniquePaths(m: number, n: number): number {
  const dp = new Array(m).fill(1);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(1);
  }

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
    }
  }

  return dp[m - 1][n - 1];
}

// Time: O(n^2)
// Space: O(n^2)

function uniquePaths2(m: number, n: number): number {
  const dp = new Array(n).fill(1);

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[c] = dp[c] + dp[c - 1];
    }
  }

  return dp[n - 1];
}

// Time: O(n^2)
// Space: O(n)
