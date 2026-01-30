function findLengthOfLCIS(nums: number[]): number {
  if (nums.length <= 1) return nums.length;

  let start = 0;
  let longest = 1;

  for (let end = 1; end < nums.length; end++) {
    if (nums[end] > nums[end - 1]) {
      longest = Math.max(longest, end - start + 1);
      continue;
    }
    start = end;
  }

  return longest;
}

function findLengthOfLCIS(nums: number[]): number {
  if (nums.length === 0) return nums.length;

  let longest = 1;
  let cur = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      cur++;
    } else {
      cur = 1;
    }

    if (cur > longest) longest = cur;
  }

  return longest;
}

// Time: O(n)
// Space: O(1)
