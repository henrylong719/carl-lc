function findClosestNumber(nums: number[]): number {
  let best = nums[0];

  for (const x of nums) {
    const ax = Math.abs(x);
    const ab = Math.abs(best);

    if (ax < ab || (ax <= ab && x > best)) {
      best = x;
    }
  }

  return best;
}

// Time: O(n)
// Space: O(1)
