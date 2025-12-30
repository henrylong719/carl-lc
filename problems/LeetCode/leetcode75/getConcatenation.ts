function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    const v = nums[i];
    ans[i] = v;
    ans[i + n] = v;
  }

  return ans;
}

// beter approach, no resizing/growth overhead during the loop, doesn't mutate the input
// Time O(n)
// Space O(n)

function getConcatenation(nums: number[]): number[] {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    nums.push(nums[i]);
  }

  return nums;
}

// Time O(n)
// Space O(n) still allocate space
