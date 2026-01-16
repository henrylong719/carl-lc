function coinChange(coins: number[], amount: number): number {
  const INF = amount + 1;
  const dp = new Array(amount + 1).fill(INF);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }
  return dp[amount] == INF ? -1 : dp[amount];
}

// Simpler transitions. Same complexity, often faster in practice.
function coinChange2(coins: number[], amount: number): number {
  const INF = amount + 1;

  const dp = new Array(amount + 1).fill(INF);
  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
    }
  }

  return dp[amount] === INF ? -1 : dp[amount];
}

function coinChangeBfs(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  coins = coins.filter((coin) => coin <= amount);
  if (coins.length === 0) return -1;

  const visited = new Array(amount + 1).fill(false);
  visited[0] = true;
  let step = 0;
  let queue = [0];

  while (queue.length) {
    step++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const cur = queue.shift()!;
      for (const coin of coins) {
        const next = cur + coin;
        if (next === amount) return step;
        if (next > amount) continue;

        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  }
  return -1;
}
// Time: O(n*amount)
// Space: O(amount)
