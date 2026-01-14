function mySqrt(x: number): number {
  let lo = 0;
  let hi = x;
  let res = 0;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    const product = mid * mid;

    if (product === x) return mid;

    if (product > x) {
      hi = mid - 1;
    } else {
      res = mid;
      lo = mid + 1;
    }
  }

  return res;
}

// Time: O(log(n))
// Space: O(1)
