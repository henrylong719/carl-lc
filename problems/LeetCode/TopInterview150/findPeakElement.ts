function findPeakElement(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}

// Time: O(log(n))
// Space: O(1)
