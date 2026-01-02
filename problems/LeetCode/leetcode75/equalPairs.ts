function equalPairs(grid: number[][]): number {
  const n = grid.length;

  const rowsCount = new Map<string, number>();

  for (let r = 0; r < n; r++) {
    const rows = grid[r].join('#');
    rowsCount.set(rows, (rowsCount.get(rows) ?? 0) + 1);
  }

  let ans = 0;

  for (let c = 0; c < grid[0].length; c++) {
    const cols = [];
    for (let r = 0; r < n; r++) cols.push(grid[r][c]);

    const key = cols.join('#');
    ans += rowsCount.get(key) ?? 0;
  }

  return ans;
}
