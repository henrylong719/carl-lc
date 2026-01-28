function maxDistance(colors: number[]): number {
  let res = 0;
  const n = colors.length;

  for (let i = 0; i < n; i++) {
    if (colors[i] !== colors[n - 1]) res = Math.max(res, n - 1 - i);
  }

  for (let i = n - 1; i >= 0; i--) {
    if (colors[i] !== colors[0]) res = Math.max(res, i);
  }

  return res;
}

// Time: O(n)
// Space: O(1)
