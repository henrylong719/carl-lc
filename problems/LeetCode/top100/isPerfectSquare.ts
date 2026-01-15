function isPerfectSquare(num: number): boolean {
  let lo = 1;
  let hi = num;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const prod = mid * mid;
    if (prod === num) return true;

    if (prod < num) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
}

// Time: O(log(n))
// Space: O(1)
