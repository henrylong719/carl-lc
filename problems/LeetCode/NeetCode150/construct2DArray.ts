function construct2DArray(
  original: number[],
  m: number,
  n: number,
): number[][] {
  if (m * n !== original.length) return [];
  if (m === 1) return [[...original]];

  const res = Array.from({ length: m }, () => Array(n));

  let idx = 0;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      res[r][c] = original[idx++];
    }
  }

  return res;
}

// Time: O(r*c)
// Space: O(r*c)

function construct2DArray(
  original: number[],
  m: number,
  n: number,
): number[][] {
  if (m * n !== original.length) return [];

  const res: number[][] = [];

  for (let i = 0; i < m; i++) {
    const arr = original.slice(i * n, i * n + n);
    res.push(arr);
  }

  return res;
}

// Time: O(r)
// Space: O(r*c)
