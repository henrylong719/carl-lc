function numTilings(n: number): number {
  if (n <= 2) return [1, 1, 2][n];

  const MOD = Math.pow(10, 9) + 7;

  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
  }

  return dp[n];
}

// Time: O(n)
// Space: O(n)
