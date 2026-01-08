function minSubsequence(nums: number[]): number[] {
  const total = nums.reduce((acc, x) => acc + x, 0);
  const arr = [...nums].sort((a, b) => b - a);

  let taken = 0;
  let res = [];

  for (const x of arr) {
    res.push(x);
    taken += x;
    if (taken > total / 2) break;
  }

  return res;
}

// Time: O(nlogn)
// Space: O(n)
