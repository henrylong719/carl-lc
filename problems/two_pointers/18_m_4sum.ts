// Input: [4, 1, 2, -1, 1, -3], target=1
// Output: [-3, -1, 1, 4], [-3, 1, 1, 2]

function fourSum(nums: number[], target: number): number[][] {
  let quadruple: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j - 1] === nums[j]) continue;
      // i + j + c + d = target
      // c + d = target - i - j

      findQuadruple(nums, target - nums[i] - nums[j], i, j, j + 1, quadruple);
    }
  }

  return quadruple;
}

function findQuadruple(
  arr: number[],
  targetSum: number,
  i: number,
  j: number,
  left: number,
  quadruple: number[][]
) {
  let right = arr.length - 1;

  while (left < right) {
    const currentValue = arr[left] + arr[right];

    if (currentValue === targetSum) {
      quadruple.push([arr[i], arr[j], arr[left], arr[right]]);
      left++;
      right--;

      while (arr[left] === arr[left - 1] && left < right) {
        left++;
      }

      while (arr[right] === arr[right + 1] && left < right) {
        right--;
      }
    } else if (currentValue < targetSum) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(fourSum([2, 2, 2, 2, 2], 8));
