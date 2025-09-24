function utopianTree(n: number): number {
  let cur = 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      cur = cur + 1;
    } else {
      cur = cur * 2;
    }
  }
  return cur;
}
