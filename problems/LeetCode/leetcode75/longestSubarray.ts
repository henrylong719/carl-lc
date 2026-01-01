function longestSubarray(nums: number[]): number {
  let lastZero = -1;
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      left = lastZero + 1;
      lastZero = right;
    }

    maxLength = Math.max(maxLength, right - left);
  }

  return maxLength;
}

// Time O(n)
// Space O(1)
