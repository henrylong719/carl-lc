function minOperations(nums: number[]): number {
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) continue;
    const expected = nums[i - 1] + 1;
    res += expected - nums[i];
    nums[i] = expected;
  }
  return res;
}

// Time: O(n)
// Space: O(1)
