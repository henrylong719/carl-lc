function findMaxConsecutiveOnes(nums: number[]): number {
  let count = 0;
  let best = 0;

  for (const num of nums) {
    if (num === 0) {
      count = 0;
      continue;
    }

    count++;
    best = Math.max(best, count);
  }

  return best;
}

// Time: O(n)
// Space: O(1)
