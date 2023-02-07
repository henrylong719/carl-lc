export function findSumOfThree(nums: number[], target: number) {
  // a + b + c = target
  // a + b = target - c

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
  }

  return false;
}
