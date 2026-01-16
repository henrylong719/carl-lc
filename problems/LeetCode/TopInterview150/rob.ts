function rob(nums: number[]): number {
  const n = nums.length;

  if (n === 1) return nums[0];

  const dp = new Array(n);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[n - 1];
}

// Time:O(n)
// Space: O(n)

function rob2(nums: number[]): number {
  const n = nums.length;

  let prev = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    const temp = Math.max(prev + nums[i], max);
    prev = max;
    max = temp;
  }

  return max;
}

// Time:O(n)
// Space: O(1)
