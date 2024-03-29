// total time complexity of this solution is O(n^2)

export function findSumOfThree(nums: number[], target: number) {
  // sorting the array: O(nlog(n))
  nums.sort((a, b) => a - b);

  // can be nums.length -2
  // nested loop to find the triplet: O(n^2)
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const targetValue = target - nums[i];

    if (findSum(nums, i + 1, targetValue)) {
      return true;
    }
  }
  return false;
}

function findSum(nums: number[], left: number, targetValue: number) {
  let right = nums.length - 1;

  while (nums[left] < nums[right]) {
    if (nums[left] + nums[right] < targetValue) {
      left++;
    } else if (nums[left] + nums[right] > targetValue) {
      right--;
    } else {
      return true;
    }
  }

  return false;
}
console.log(findSumOfThree([1, -1, 0], -1));
