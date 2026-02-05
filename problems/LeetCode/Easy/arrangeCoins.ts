function arrangeCoins(n: number): number {
  let l = 0;
  let r = n;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    const need = ((1 + mid) * mid) / 2;

    if (need === n) return mid;

    if (need < n) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return r;
}

// Time: O(logn)
// Space: O(1)
