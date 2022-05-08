function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let smallest_difference = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const target_diff = target - nums[i] - nums[left] - nums[right];

      if (target_diff === 0) {
        return target;
      }

      if (
        Math.abs(target_diff) < Math.abs(smallest_difference) ||
        (Math.abs(target_diff) === Math.abs(smallest_difference) &&
          target_diff > smallest_difference)
      ) {
        smallest_difference = target_diff;
      }

      if (target_diff > 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return target - smallest_difference;
}

console.log(threeSumClosest([-2, 0, 1, 2], 2));
