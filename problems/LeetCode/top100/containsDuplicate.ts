function containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }

  return false;
}

// Time: O(nlog(n))
// Space: O(1)

function containsDuplicate2(nums: number[]): boolean {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
}

// Time: O(n)
// Space: O(n)
