function snakesAndLadders(board: number[][]): number {
  let flat = [0];

  const n = board.length;
  const target = Math.pow(n, 2);

  let idx = 1;

  for (let r = board.length - 1; r >= 0; r--) {
    const rowIdx = n - r;
    const reverseRow = rowIdx % 2 === 0;

    if (reverseRow) {
      for (let c = n - 1; c >= 0; c--) flat[idx++] = board[r][c];
    } else {
      for (let c = 0; c < n; c++) flat[idx++] = board[r][c];
    }
  }

  const bfs = () => {
    // [positon, steps]
    const queue = [[1, 0]];

    let q = 0;

    // we start from position 1
    const visited = new Set([1]);

    while (q < queue.length) {
      const [curr, step] = queue[q++];

      if (curr === target) return step;

      for (let i = 1; i <= 6; i++) {
        const nextPos = curr + i;
        if (nextPos > target) break;

        let next = nextPos;

        if (flat[nextPos] !== -1) {
          next = flat[nextPos];
        }

        if (!visited.has(next)) {
          visited.add(next);
          queue.push([next, step + 1]);
        }
      }
    }

    return -1;
  };

  return bfs();
}

// Time O(n^2)
// Space O(n^2)
