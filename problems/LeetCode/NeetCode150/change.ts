function change(amount: number, coins: number[]): number {
  const dp = new Array(amount + 1).fill(0);

  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}

// Time: O(n^2)
// Space: O(n)
