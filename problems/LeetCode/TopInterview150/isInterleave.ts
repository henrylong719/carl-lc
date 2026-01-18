function isInterleave(s1: string, s2: string, s3: string): boolean {
  const m = s1.length;
  const n = s2.length;

  if (m + n !== s3.length) return false;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  dp[m][n] = true;

  for (let i = m; i >= 0; i--) {
    for (let j = n; j >= 0; j--) {
      if (i === m && j == n) continue;

      if (i < m && s1[i] === s3[i + j] && dp[i + 1][j]) {
        dp[i][j] = true;
      }

      if (j < n && s2[j] === s3[i + j] && dp[i][j + 1]) {
        dp[i][j] = true;
      }
    }
  }
  return dp[0][0];
}

function isInterleave2(s1: string, s2: string, s3: string): boolean {
  const m = s1.length;
  const n = s2.length;

  if (m + n !== s3.length) return false;

  const memo = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(undefined),
  );

  const dfs = (i: number, j: number): boolean => {
    if (i === m && j === n) return true;

    if (memo[i][j] !== undefined) return memo[i][j];

    const k = i + j;
    let ok = false;

    if (i < m && s1[i] === s3[k] && dfs(i + 1, j)) {
      ok = true;
    } else if (j < n && s2[j] === s3[k] && dfs(i, j + 1)) {
      ok = true;
    }

    memo[i][j] = ok;
    return memo[i][j];
  };

  return dfs(0, 0);
}

// Time: O(m*n)
// Space: O(m*n)
