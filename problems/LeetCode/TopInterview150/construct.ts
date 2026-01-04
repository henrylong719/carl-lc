function construct(grid: number[][]): _Node | null {
  const n = grid.length;

  const isUniform = (r0: number, c0: number, len: number) => {
    let num = grid[r0][c0];
    for (let r = r0; r < r0 + len; r++) {
      for (let c = c0; c < c0 + len; c++) {
        if (grid[r][c] !== num) return -1;
      }
    }
    return num;
  };

  const build = (r0: number, c0: number, len: number) => {
    const num = isUniform(r0, c0, len);

    if (num !== -1) {
      return new _Node(num === 1, true, null, null, null, null);
    }

    len = Math.floor(len / 2);

    const tl = build(r0, c0, len);
    const tr = build(r0, c0 + len, len);
    const bl = build(r0 + len, c0, len);
    const br = build(r0 + len, c0 + len, len);

    const node = new _Node(true, false, tl, tr, bl, br);
    return node;
  };

  return build(0, 0, n);
}

// Time: n^2 log(n)
// Space: log(n)
