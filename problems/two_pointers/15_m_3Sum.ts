function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const triples = [] as number[][];

  for (let i = 0; i < nums.length; i++) {
    // skip repetitive elements
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    // a + b + c = 0;
    // b + c = - a
    searchPair(nums, -nums[i], i + 1, triples);
  }

  return triples;
}

function searchPair(
  arr: number[],
  targetSum: number,
  left: number,
  triplets: number[][]
) {
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]]);
      left++;
      right--;

      while (arr[left] === arr[left - 1] && left < right) {
        left++;
      }

      while (arr[right] === arr[right + 1] && left < right) {
        right--;
      }
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(threeSum([-3, 0, 1, 2, -1, 1, -2]));
