function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);

  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
}

// Time: O(n)
// Space: O(n)

function maxSubArray3(nums: number[]): number {
  let cur = nums[0];
  let best = nums[0];

  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(cur + nums[i], nums[i]);
    best = Math.max(best, cur);
  }

  return best;
}
// Time: O(n)
// Space: O(1)

function maxSubArray2(nums: number[]): number {
  let ans = nums[0];
  let total = 0;

  for (const num of nums) {
    if (total < 0) {
      total = 0;
    }

    total += num;

    ans = Math.max(total, ans);
  }

  return ans;
}

// Time: O(n)
// Space: O(1)
