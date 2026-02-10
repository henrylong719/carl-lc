function specialArray(nums: number[]): number {
  let n = nums.length;
  if (n === 0) return -1;
  nums.sort((a, b) => a - b);

  const leftBound = (arr: number[], target: number) => {
    let l = 0;
    let r = arr.length - 1;
    let idx = -1;

    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);

      if (arr[mid] >= target) {
        r = mid - 1;
        idx = mid;
      } else {
        l = mid + 1;
      }
    }
    return idx;
  };

  for (let i = 0; i <= n; i++) {
    const idx = leftBound(nums, i);

    if (idx === -1) continue;
    if (n - idx === i) return i;
  }

  return -1;
}

// Time: O(nlog(n))
// Space: O(1)

function specialArray(nums: number[]): number {
  const n = nums.length;
  const freq = new Array(n + 1).fill(0);

  for (const num of nums) {
    freq[Math.min(num, n)]++;
  }

  let gt = 0;

  for (let i = n; i >= 0; i--) {
    gt += freq[i];

    if (gt === i) {
      return i;
    }
  }

  return -1;
}

// Time: O(n)
// Space: O(n)
