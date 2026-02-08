function findKthPositive(arr: number[], k: number): number {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const missing = arr[mid] - (mid + 1);
    if (missing >= k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l + k;
}

// Time: O(log(n))
// Space: O(1)
