/*
 *
 * Given an array arr of unsorted numbers and a target sum, count all triplets in it such that
 * arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
 * Write a function to return the count of such triplets.
 *
 *
 * Input: [-1, 4, 2, 1, 3], target=5
 * Output: 4
 * Explanation: There are four triplets whose sum is less than the target:
 * [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
 *
 *
 */

const triplet_with_smaller_sum = function (arr: number[], target: number) {
  // a + left + right < target
  // left + right < target - a

  arr.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i - 1] === arr[i]) continue;
    count += searchPair(arr, target - arr[i], i);
  }

  return count;
};

function searchPair(arr: number[], targetSum: number, first: number): number {
  let count = 0;
  let left = first + 1;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];

    if (currentSum < targetSum) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
}

// console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

function triplet_with_smaller_sum_II(arr: number[], target: number) {
  arr.sort((a, b) => a - b);
  let triplets: number[][] = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    // i + left + right < target
    // left + right < target - i
    // searchPair_II()
    searchPair_II(arr, target - arr[i], i, triplets);
  }

  return triplets;
}

function searchPair_II(
  arr: number[],
  target_sum: number,
  first: number,
  triplets: number[][]
) {
  let left = first + 1;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];

    if (currentSum < target_sum) {
      for (let i = right; i > left; i--) {
        triplets.push([arr[first], arr[left], arr[i]]);
      }

      left++;
    } else {
      right--;
    }
  }
}

console.log(triplet_with_smaller_sum_II([-1, 4, 2, 1, 3], 5));
