function shortestToChar(s: string, c: string): number[] {
  const n = s.length;
  const res = new Array(n);

  let last = -Infinity;

  for (let i = 0; i < n; i++) {
    if (s[i] === c) last = i;
    res[i] = i - last;
  }

  last = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) last = i;
    res[i] = Math.min(res[i], last - i);
  }

  return res;
}

// Time: O(n)
// Space: O(n)
