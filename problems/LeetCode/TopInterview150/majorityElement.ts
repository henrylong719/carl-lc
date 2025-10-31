function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    num === candidate ? count++ : count--;
  }
  return candidate;
}

function majorityElement2(nums: number[]): number {
  nums.sort((a, b) => a - b);

  return nums[Math.floor(nums.length / 2)];
}
