function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b);

  const mid = Math.floor(nums.length / 2);

  return nums[mid];
}

function majorityElement2(nums: number[]): number {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count == 0) {
      candidate = num;
    }

    candidate == num ? count++ : count--;
  }

  return candidate as number;
}
