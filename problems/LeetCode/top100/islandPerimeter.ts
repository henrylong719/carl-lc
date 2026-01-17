function islandPerimeter(grid: number[][]): number {
  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  const rows = grid.length;
  const cols = grid[0].length;

  const withinBound = (r: number, c: number) => {
    return r >= 0 && r < rows && c >= 0 && c < cols;
  };

  let res = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] !== 1) continue;
      let count = 0;

      for (let [r, c] of directions) {
        const nr = row + r;
        const nc = col + c;
        if (!withinBound(nr, nc) || grid[nr][nc] === 0) {
          count++;
        }
      }
      res += count;
    }
  }

  return res;
}

function islandPerimeter(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  let land = 0;
  let shared = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        land++;
        // top
        if (r > 0 && grid[r - 1][c] === 1) shared++;

        // left
        if (c > 0 && grid[r][c - 1] === 1) shared++;
      }
    }
  }

  return land * 4 - shared * 2;
}

// Time: O(m*n)
// Space: O(1)

function islandPerimeter(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  const inBound = (r: number, c: number) => {
    return r >= 0 && c >= 0 && r < rows && c < cols;
  };

  const dfs = (r: number, c: number): number => {
    if (!inBound(r, c)) return 1;

    if (grid[r][c] === 0) return 1;

    if (grid[r][c] === 2) return 0;

    grid[r][c] = 2;

    let perim = 0;

    for (const [dr, dc] of directions) {
      perim += dfs(r + dr, c + dc);
    }

    return perim;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        return dfs(r, c);
      }
    }
  }

  return 0;
}

// Time: O(m*n)
// Space: O(m*n)
