function climbStairs(n: number): number {
  const dp = new Array(45).fill(null);
  const fib = (n: number): number => {
    if (n <= 1) return 1;
    if (dp[n]) return dp[n];
    dp[n] = fib(n - 1) + fib(n - 2);
    return dp[n];
  };
  return fib(n);
}

// Time: O(n)
// Space: O(n)

function climbStairs2(n: number): number {
  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
// Time: O(n)
// Space: O(n)

function climbStairs3(n: number): number {
  if (n <= 1) return 1;

  let a = 1;
  let b = 1;
  let c = 0;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

// Time: O(n)
// Space: O(1)
