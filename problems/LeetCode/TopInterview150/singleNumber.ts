function singleNumber(nums: number[]): number {
  let res = 0;

  for (const num of nums) {
    res ^= num;
  }

  return res;
}

// Time: O(n)
// Space: O(1)
