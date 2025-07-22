function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < nums.length; i += 2) {
    count += nums[i];
  }

  return count;
}
