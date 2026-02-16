function targetIndices(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b);

  const lowerBound = (arr: number[], target: number) => {
    let l = 0;
    let h = arr.length - 1;
    let res = arr.length;

    while (l <= h) {
      const mid = l + Math.floor((h - l) / 2);

      if (arr[mid] >= target) {
        h = mid - 1;
        res = mid;
      } else {
        l = mid + 1;
      }
    }
    return res;
  };

  const idx = lowerBound(nums, target);
  const hIdx = lowerBound(nums, target + 1);

  if (idx === nums.length || nums[idx] !== target) return [];

  const ans = [];

  for (let i = idx; i < hIdx; i++) {
    ans.push(i);
  }

  return ans;
}

// Time: O(nlog(n))
// Space: O(n)

function targetIndices(nums: number[], target: number): number[] {
  let less = 0;
  let equal = 0;

  for (const num of nums) {
    if (num < target) less++;
    if (num === target) equal++;
  }

  let res: number[] = [];

  for (let i = 0; i < equal; i++) {
    res.push(less + i);
  }

  return res;
}

// Time: O(n)
// Space: O(n)
