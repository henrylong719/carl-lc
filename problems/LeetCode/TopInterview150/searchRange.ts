function searchRange(nums: number[], target: number): number[] {
  const start = bisectLeft(nums, target);

  if (start === nums.length || nums[start] !== target) return [-1, -1];

  const end = bisectLeft(nums, target + 1) - 1;
  return [start, end];
}

function bisectLeft(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

function searchRange2(nums: number[], target: number): number[] {
  const start = lowerBound(nums, target);

  if (start === nums.length || nums[start] !== target) return [-1, -1];

  const end = higherBound(nums, target) - 1;
  return [start, end];
}

function lowerBound(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

function higherBound(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] <= target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

// Time: O(log(n))
// Space: O(1)
