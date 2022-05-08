// // brutal solution
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return [-1, -1];
// }

// two pointer solution
// input has to be in order

function twoSum(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];

    if (currentSum === target) {
      return [left, right];
    }

    if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}

// using hash table solution

function twoSumWithHashTable(nums: number[], target: number): number[] {
  let table = {} as any;

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];

    if (target - value in table) {
      return [table[target - value], i];
    }

    table[value] = i;
  }

  return [-1, -1];
}

console.log(twoSum([3, 2, 4], 6));
