function isValidSudoku(board: string[][]): boolean {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      // check the whole col
      if (row === 0) {
        let count = 0;
        let set = new Set();

        for (let i = 0; i < 9; i++) {
          if (board[row + i][col] !== '.') {
            count += 1;
            set.add(board[row + i][col]);
          }
          if (count !== set.size) {
            return false;
          }
        }
      }

      // check the whole row
      if (col === 0) {
        let count = 0;
        let set = new Set();

        for (let i = 0; i < 9; i++) {
          if (board[row][col + i] !== '.') {
            count += 1;
            set.add(board[row][col + i]);
          }
          if (count !== set.size) {
            return false;
          }
        }
      }

      // check the grid
      if (row % 3 === 0 && col % 3 === 0) {
        const a = board[row][col];
        const b = board[row + 1][col];
        const c = board[row + 2][col];
        const d = board[row][col + 1];
        const e = board[row][col + 2];
        const f = board[row + 1][col + 1];
        const g = board[row + 2][col + 1];
        const h = board[row + 1][col + 2];
        const i = board[row + 2][col + 2];

        const arr = [a, b, c, d, e, f, g, h, i].filter((ele) => ele !== '.');

        const set = new Set(arr);

        if (arr.length !== set.size) {
          return false;
        }
      }
    }
  }
  return true;
}

function isValidSudoku2(board: string[][]): boolean {
  const rows: Set<string>[] = [];
  const cols: Set<string>[] = [];
  const boxes: Set<string>[] = [];

  for (let i = 0; i < 9; i++) {
    rows.push(new Set());
    cols.push(new Set());
    boxes.push(new Set());
  }

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === '.') {
        continue;
      }

      const val = board[r][c];

      const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(val) || cols[c].has(val) || boxes[boxIdx].has(val)) {
        return false;
      }

      rows[r].add(val);
      cols[c].add(val);
      boxes[boxIdx].add(val);
    }
  }

  return true;
}
