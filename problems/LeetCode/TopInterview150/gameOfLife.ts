function gameOfLife(board: number[][]): void {
  const duplicateBoard = [];
  const rows = board.length;
  const cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    duplicateBoard[row] = [];
    for (let col = 0; col < cols; col++) {
      duplicateBoard[row][col] = board[row][col];
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // check its neighbours
      const topLeft = {
        row: row - 1,
        col: col - 1,
      };

      const top = {
        row: row - 1,
        col: col,
      };

      const topRight = {
        row: row - 1,
        col: col + 1,
      };

      const right = {
        row: row,
        col: col + 1,
      };

      const bottomRight = {
        row: row + 1,
        col: col + 1,
      };

      const bottom = {
        row: row + 1,
        col: col,
      };

      const bottomLeft = {
        row: row + 1,
        col: col - 1,
      };

      const left = {
        row: row,
        col: col - 1,
      };

      const neighbours = [
        topLeft,
        top,
        topRight,
        right,
        bottomRight,
        bottom,
        bottomLeft,
        left,
      ];
      const neighborCount = countAliveNeighbors(
        duplicateBoard,
        neighbours,
        rows,
        cols
      );
      board[row][col] = updateState(neighborCount, board[row][col]);
    }
  }
}

// Time complexity: O(r*c)
// Space complexity: O(r*c)

function updateState(neighborCount: number, currentState: number) {
  let newState = currentState;

  if (currentState === 1 && (neighborCount < 2 || neighborCount > 3)) {
    newState = 0;
  } else if (currentState === 0 && neighborCount === 3) {
    newState = 1;
  }
  return newState;
}

function countAliveNeighbors(
  duplicateBoard: number[][],
  neighbors: any,
  rows: number,
  cols: number
) {
  let count = 0;
  neighbors.forEach(({ row, col }) => {
    if (isWithinBorad(row, col, rows, cols) && duplicateBoard[row][col] === 1) {
      count++;
    }
  });
  return count;
}

function isWithinBorad(row: number, col: number, rows: number, cols: number) {
  if (row < rows && row >= 0 && col < cols && col >= 0) {
    return true;
  }
  return false;
}

function gameOfLife2(board: number[][]): void {
  // -1 to mark a cell that was alive but die
  // 2 to mark a cell that was die but alive

  const rows = board.length;
  const cols = board[0].length;

  const countLives = (r: number, c: number) => {
    let count = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) {
          continue;
        }

        if (
          r + dr >= 0 &&
          r + dr < rows &&
          c + dc >= 0 &&
          c + dc < cols &&
          Math.abs(board[r + dr][c + dc]) === 1
        ) {
          count++;
        }
      }
    }
    return count;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const liveNeighbors = countLives(row, col);

      if (board[row][col] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[row][col] = -1;
        continue;
      }

      if (board[row][col] === 0 && liveNeighbors === 3) {
        board[row][col] = 2;
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      board[row][col] = board[row][col] > 0 ? 1 : 0;
    }
  }
}

// Time compleixty: O(r*c)
// Space complexity: O(1)
