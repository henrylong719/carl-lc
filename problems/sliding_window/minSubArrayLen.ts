/*
 *
 * 7 , [2,3,1,2,4,3]
 * 4 , [1,4,4]
 * 11 , [1,1,1,1,1,1,1,1]
 * 10 , [1,2,3,4]
 * 5 , [1,2,1,3]
 *
 */

export function minSubArraylen(target: number, nums: number[]) {
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    // current number is equal or bigger than the target find min value
    if (nums[i] >= target) return 1;

    let windowSize = 0;
    let sum = 0;

    while (sum < target && i + windowSize < nums.length) {
      sum += nums[i + windowSize];
      windowSize++;
    }

    if (min > windowSize && sum >= target) {
      min = windowSize;
    }
  }

  if (min === Infinity) min = 0;

  return min;
}

// better solution
export function minSubArraylenSolution(target: number, nums: number[]) {
  let windowSize = Infinity;

  let start = 0;
  let totalSum = 0;

  for (let end = 0; end < nums.length; end++) {
    totalSum += nums[end];

    while (totalSum >= target) {
      // get current window size
      let size = end + 1 - start;

      windowSize = Math.min(size, windowSize);

      // move the slide window
      totalSum -= nums[start];
      start++;
    }
  }

  if (windowSize === Infinity) return 0;

  return windowSize;
}
