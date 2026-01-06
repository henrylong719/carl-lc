function guessNumber(n: number): number {
  let l = 1;
  let r = n;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    const res = guess(mid);

    if (res === 0) {
      return mid;
    } else if (res === -1) {
      r = mid - 1;
    } else if (res === 1) {
      l = mid + 1;
    }
  }

  return null;
}

// Time: O(log(n))
// Space: O(1)
