function threeSum(nums: number[]): number[][] {
  let sorted = nums.sort((a, b) => a - b);
  let ans = [] as number[][];

  for (let i = 0; i < sorted.length; i++) {
    // Remove duplicates
    if (i !== 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }
    twoSum(sorted, i + 1, -sorted[i], ans);
  }

  return ans;
}

function twoSum(
  sorted: number[],
  left: number,
  target: number,
  ans: number[][]
) {
  let right = sorted.length - 1;

  while (left < right) {
    if (sorted[left] + sorted[right] === target) {
      ans.push([-target, sorted[left], sorted[right]]);
      left++;
      right--;

      // Remove duplicates
      while (left < right && sorted[left] === sorted[left - 1]) {
        left++;
      }

      while (left < right && sorted[right] === sorted[right + 1]) {
        right--;
      }
    } else if (sorted[left] + sorted[right] < target) {
      left++;
    } else {
      right--;
    }
  }
}

// Time complexity: O(n^2) +O(nlog(n)) = O(n^2)
// Space complexity: O(n)
