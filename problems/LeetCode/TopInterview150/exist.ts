function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const inBounds = (r: number, c: number) => {
    return r >= 0 && c >= 0 && r < rows && c < cols;
  };

  const dfs = (r: number, c: number, i: number) => {
    if (board[r][c] !== word[i]) return false;
    if (i === word.length - 1) return true;

    const saved = board[r][c];
    board[r][c] = '#';

    for (let dir of dirs) {
      const nr = r + dir[0];
      const nc = c + dir[1];

      if (!inBounds(nr, nc)) continue;
      if (board[nr][nc] === '#') continue;
      if (dfs(nr, nc, i + 1)) {
        board[r][c] = saved;
        return true;
      }
    }
    board[r][c] = saved;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] !== word[0]) continue;
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
}

// Time: O(m*n * 3^(l-1))
// Space: O(L) recursion depth

function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  const L = word.length;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const inBound = (r: number, c: number) => {
    return r >= 0 && c >= 0 && r < rows && c < cols;
  };

  // frequency check
  const need = new Map<string, number>();

  for (const char of word) {
    need.set(char, (need.get(char) ?? 0) + 1);
  }

  const have = new Map<string, number>();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const char = board[r][c];
      have.set(char, (have.get(char) ?? 0) + 1);
    }
  }

  for (const [key, val] of need) {
    if ((have.get(key) ?? 0) < val) return false;
  }

  const firstCharCount = have.get(word[0])!;
  const lastCharCount = have.get(word[L - 1])!;

  if (lastCharCount < firstCharCount) {
    word = word.split('').reverse().join('');
  }

  const dfs = (r: number, c: number, i: number) => {
    if (board[r][c] !== word[i]) return false;
    if (i === L - 1) return true;

    const saved = board[r][c];
    board[r][c] = '#';

    const next = word[i + 1];

    for (const dir of dirs) {
      const nr = r + dir[0];
      const nc = c + dir[1];

      if (!inBound(nr, nc) || board[nr][nc] !== next) continue;
      if (dfs(nr, nc, i + 1)) {
        board[r][c] = saved;
        return true;
      }
    }

    board[r][c] = saved;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] !== word[0]) continue;
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
}

// Time: O(m*n * 3^(l-1))
// Space: O(L) + O(U) - O(L) recursion depth, plus maps for up to U unique characters.
