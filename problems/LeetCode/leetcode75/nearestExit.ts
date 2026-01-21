function nearestExit(maze: string[][], entrance: number[]): number {
  const queue: [number, number][] = [[entrance[0], entrance[1]]];

  const rows = maze.length;
  const cols = maze[0].length;

  const inBound = (r: number, c: number): boolean => {
    return r >= 0 && c >= 0 && r < rows && c < cols;
  };

  const inExit = (r: number, c: number): boolean => {
    if (r === entrance[0] && c === entrance[1]) return false;
    return r === 0 || c === 0 || r === rows - 1 || c === cols - 1;
  };

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let head = 0;
  let step = 0;

  while (head < queue.length) {
    const len = queue.length - head;
    let moved = false;
    for (let i = 0; i < len; i++) {
      const [r, c] = queue[head++];
      if (inExit(r, c)) return step;

      // if we put it here, same r,c can be visited multiple times
      //  maze[r][c] = '+';

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (inBound(nr, nc) && maze[nr][nc] === '.') {
          maze[nr][nc] = '+';
          queue.push([nr, nc]);
          moved = true;
        }
      }
    }
    if (moved) step++;
  }

  return -1;
}

// Time: O(R * C)
// Space: O(R * C)
