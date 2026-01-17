function maximalSquare(matrix: string[][]): number {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const dp = new Array(rows).fill(-1);
  for (let r = 0; r < rows; r++) {
    dp[r] = new Array(cols).fill(-1);
  }

  let best = 0;

  const helper = (r: number, c: number) => {
    if (r >= rows || c >= cols) return 0;

    if (dp[r][c] !== -1) return dp[r][c];

    let res = 0;

    const right = helper(r, c + 1);
    const diag = helper(r + 1, c + 1);
    const bottom = helper(r + 1, c);

    if (matrix[r][c] === '1') {
      res = 1 + Math.min(right, diag, bottom);
      best = Math.max(best, res);
    }
    dp[r][c] = res;

    return res;
  };

  helper(0, 0);

  return best * best;
}

function maximalSquare(matrix: string[][]): number {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const dp = new Array(rows).fill(0);
  for (let r = 0; r < rows; r++) {
    dp[r] = new Array(cols).fill(0);
  }

  let best = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === '1') {
        if (r === 0 || c === 0) {
          dp[r][c] = 1;
        } else {
          dp[r][c] = 1 + Math.min(dp[r - 1][c - 1], dp[r - 1][c], dp[r][c - 1]);
        }
        best = Math.max(dp[r][c], best);
      }
    }
  }
  return best * best;
}

// Time: O(m*n)
// Space: O(m*n)
