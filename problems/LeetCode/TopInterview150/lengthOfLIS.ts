function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);
  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
}

// Time: O(n^2)
// Space: O(n)

function lengthOfLIS2(nums: number[]): number {
  const res = [];

  const binarySearch = (arr: number[], target: number) => {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] > target) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  };

  for (const num of nums) {
    if (!res.length || res[res.length - 1] < num) {
      res.push(num);
    } else {
      const idx = binarySearch(res, num);
      res[idx] = num;
    }
  }
  return res.length;
}

// Time: O(nlog(n))
// Space: O(n)
