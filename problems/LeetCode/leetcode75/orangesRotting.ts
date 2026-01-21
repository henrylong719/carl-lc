function orangesRotting(grid: number[][]): number {
  let queue: [number, number][] = [];

  const rows = grid.length;
  const cols = grid[0].length;
  let fresh = 0;

  // locate all rotten oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      else if (grid[r][c] === 1) fresh++;
    }
  }

  if (fresh === 0) return 0;

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const inBound = (r: number, c: number) =>
    r >= 0 && c >= 0 && r < rows && c < cols;
  let mins = 0;
  let head = 0;

  while (head < queue.length) {
    const len = queue.length - head;
    let rottedThisMinute = false;

    for (let i = 0; i < len; i++) {
      const [r, c] = queue[head++];
      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (!inBound(nr, nc) || grid[nr][nc] !== 1) continue;
        rottedThisMinute = true;
        grid[nr][nc] = 2;
        fresh--;
        queue.push([nr, nc]);
      }
    }

    if (rottedThisMinute) {
      mins++;
      if (fresh === 0) return mins;
    }
  }

  return -1;
}

function orangesRotting(grid: number[][]): number {
  let queue: [number, number][] = [];

  const rows = grid.length;
  const cols = grid[0].length;
  let fresh = 0;

  // locate all rotten oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      else if (grid[r][c] === 1) fresh++;
    }
  }

  if (fresh === 0) return 0;

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const inBound = (r: number, c: number) =>
    r >= 0 && c >= 0 && r < rows && c < cols;
  let mins = 0;
  let head = 0;

  while (head < queue.length) {
    const len = queue.length - head;
    let rottedThisMinute = false;

    for (let i = 0; i < len; i++) {
      const [r, c] = queue[head++];
      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (!inBound(nr, nc) || grid[nr][nc] !== 1) continue;
        rottedThisMinute = true;
        grid[nr][nc] = 2;
        fresh--;
        queue.push([nr, nc]);
      }
    }

    if (rottedThisMinute) {
      mins++;
      if (fresh === 0) return mins;
    }
  }

  return -1;
}

// Time: O(R*C)
// Space: O(R*C) (queue)
