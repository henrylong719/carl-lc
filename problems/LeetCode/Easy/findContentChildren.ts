function findContentChildren(g: number[], s: number[]): number {
  // sort children and cookies arrays in ascending order
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let count = 0;
  let childIdx = 0;
  let cookieIdx = 0;

  while (childIdx < g.length && cookieIdx < s.length) {
    if (g[childIdx] <= s[cookieIdx]) {
      count++;
      childIdx++;
      cookieIdx++;
    } else {
      cookieIdx++;
    }
  }

  return count;
}
