function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const seen: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num in seen && i - seen[num] <= k) {
      return true;
    }

    seen[num] = i;
  }

  return false;
}

function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    // index of any number before this will not be considered
    if (i > k) {
      seen.delete(nums[i - k - 1]);
    }

    if (seen.has(nums[i])) {
      return true;
    }

    seen.add(nums[i]);
  }

  return false;
}

// Time complexity: O(n)
// Space complexity: O(n)
