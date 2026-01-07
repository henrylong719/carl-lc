function largestSumAfterKNegations(nums: number[], k: number): number {
  let sorted = nums.sort((a, b) => a - b);

  let i = 0;

  while (i < k) {
    if (sorted[i] === 0) break;

    if (sorted[i] < 0) {
      sorted[i] = -sorted[i];
      i++;
    } else {
      k = (k - i) % 2;
      if (k === 1) {
        sorted = nums.sort((a, b) => a - b);
        sorted[0] = -sorted[0];
      }
      break;
    }
  }

  return sorted.reduce((acc, cur) => acc + cur, 0);
}

function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length && k > 0 && nums[i] < 0; i++, k--) {
    nums[i] = -nums[i];
  }

  let minVal = Infinity;
  let res = 0;

  for (const num of nums) {
    res += num;
    if (num < minVal) minVal = num;
  }

  if (k % 2 !== 0) res -= 2 * minVal;
  return res;
}

// Time: O(nlog(n))
// Space: O(1)
