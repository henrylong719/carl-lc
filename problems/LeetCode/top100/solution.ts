var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let lo = 1;
    let hi = n;

    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (isBadVersion(mid)) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }

    return lo;
  };
};

// Time: O(log(n))
// Space: O(1)
