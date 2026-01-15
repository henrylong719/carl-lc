function missingNumber(nums: number[]): number {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  const sum = nums.reduce((acc, cur) => acc + cur, 0);

  return total - sum;
}

function missingNumber2(nums: number[]): number {
  let res = nums.length;

  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }

  return res;
}

function missingNumber3(nums: number[]): number {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i];
  }

  return res;
}
// Time: O(n)
// Space: O(1)
