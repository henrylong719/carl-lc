function minimumTotal(triangle: number[][]): number {
  const n = triangle.length + 1;

  const dp = new Array(n);

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0;
    }
  }

  for (let r = triangle.length - 1; r >= 0; r--) {
    for (let c = 0; c < triangle[r].length; c++) {
      dp[r][c] = triangle[r][c] + Math.min(dp[r + 1][c], dp[r + 1][c + 1]);
    }
  }

  return dp[0][0];
}

// Time: O(n^2)
// Space: O(n^2)

function minimumTotal2(triangle: number[][]): number {
  const dp = new Array(triangle.length + 1).fill(0);

  for (let r = triangle.length - 1; r >= 0; r--) {
    for (let c = 0; c < triangle[r].length; c++) {
      dp[c] = triangle[r][c] + Math.min(dp[c], dp[c + 1]);
    }
  }

  return dp[0];
}

function minimumTotal3(triangle: number[][]): number {
  const n = triangle.length;

  const dp = new Array(n + 1).fill(0);

  for (let r = n - 1; r >= 0; r--) {
    const row = triangle[r];

    for (let c = 0; c < row.length; c++) {
      const a = dp[c];
      const b = dp[c + 1];

      dp[c] = row[c] + (a < b ? a : b);
    }
  }

  return dp[0];
}

// Time: O(n^2)
// Space: O(n)
