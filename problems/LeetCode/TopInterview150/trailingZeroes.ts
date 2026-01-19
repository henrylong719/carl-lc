function trailingZeroes(n: number): number {
  let count = 0;

  while (n) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}

// Time: O(Log(n))
// Space: O(1)
