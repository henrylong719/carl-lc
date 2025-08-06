function numDistinct(s: string, t: string): number {
  let dp = [] as number[][];

  const m = s.length;
  const n = t.length;

  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= m; j++) {
      dp[i][j] = 0;
    }
  }

  dp[0].fill(1);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] = dp[i][j - 1];

      if (t[i - 1] === s[j - 1]) {
        dp[i][j] += dp[i - 1][j - 1];
      }
    }
  }

  return dp[n][m];
}
