function findMaxAverage(nums: number[], k: number): number {
  // in case negative number
  let max_sum = -Infinity;
  let window_start = 0;
  let window_sum = 0.0;

  for (let i = 0; i < nums.length; i++) {
    window_sum += nums[i];

    // hit the required size of k
    if (i >= k - 1) {
      max_sum = Math.max(max_sum, window_sum);
      window_sum -= nums[window_start];
      window_start++;
    }
  }

  return max_sum / k;
}

let nums = [-1];
let nums2 = [1, 12, -5, -6, 50, 3];
let k = 1;
let k2 = 4;

console.log(findMaxAverage(nums, k));

console.log(findMaxAverage(nums2, k2));
