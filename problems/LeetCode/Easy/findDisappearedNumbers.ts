function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums);
  const res: number[] = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) res.push(i);
  }

  return res;
}

// Time: O(n)
// Space: O(n)

function findDisappearedNumbers2(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] > 0) nums[idx] = -nums[idx];
  }

  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }

  return res;
}

// Time: O(n)
// Space: O(1)
