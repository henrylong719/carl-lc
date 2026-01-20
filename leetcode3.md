

### [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) (17/1)

```typescript

function fib(n: number): number {
  const cache: (number | undefined)[] = new Array(n + 1);

  const fibonacci = (k: number): number => {
    if (k === 0 || k === 1) return k;
    if (cache[k] !== undefined) return cache[k]!;
    cache[k] = fibonacci(k - 1) + fibonacci(k - 2);
    return cache[k]!;
  };

  return fibonacci(n);
}

// Time: O(n)
// Space: O(n)

function fib2(n: number): number {
  if (n === 0 || n === 1) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

// Time: O(n)
// Space: O(1)

```



### **[463. Island Perimeter](https://leetcode.com/problems/island-perimeter/) (17/1)

```typescript
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


```



### ***[72. Edit Distance](https://leetcode.com/problems/edit-distance/) (17/1)

```typescript
function minDistance(word1: string, word2: string): number {
  let dp = new Array(word1.length + 1).fill(Infinity);

  for (let r = 0; r < word1.length + 1; r++) {
    dp[r] = new Array(word2.length + 1).fill(Infinity);
  }

  for (let c = 0; c < word2.length + 1; c++) {
    dp[word1.length][c] = word2.length - c;
  }

  for (let r = 0; r < word1.length + 1; r++) {
    dp[r][word2.length] = word1.length - r;
  }

  for (let i = word1.length - 1; i >= 0; i--) {
    for (let j = word2.length - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i + 1][j + 1], dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  return dp[0][0];
}

// Time: O(m*n)
// Space: O(m*n)
```



### ***[221. Maximal Square](https://leetcode.com/problems/maximal-square/) (17/1)

```typescript

function maximalSquare(matrix: string[][]): number {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const dp = new Array(rows).fill(-1);
  for (let r = 0; r < rows; r++) {
    dp[r] = new Array(cols).fill(-1);
  }

  let best = 0;

  const helper = (r: number, c: number) => {
    if (r >= rows || c >= cols) return 0;

    if (dp[r][c] !== -1) return dp[r][c];

    let res = 0;

    const right = helper(r, c + 1);
    const diag = helper(r + 1, c + 1);
    const bottom = helper(r + 1, c);

    if (matrix[r][c] === '1') {
      res = 1 + Math.min(right, diag, bottom);
      best = Math.max(best, res);
    }
    dp[r][c] = res;

    return res;
  };

  helper(0, 0);

  return best * best;
}

function maximalSquare(matrix: string[][]): number {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const dp = new Array(rows).fill(0);
  for (let r = 0; r < rows; r++) {
    dp[r] = new Array(cols).fill(0);
  }

  let best = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === '1') {
        if (r === 0 || c === 0) {
          dp[r][c] = 1;
        } else {
          dp[r][c] = 1 + Math.min(dp[r - 1][c - 1], dp[r - 1][c], dp[r][c - 1]);
        }
        best = Math.max(dp[r][c], best);
      }
    }
  }
  return best * best;
}

// Time: O(m*n)
// Space: O(m*n)

```



### **[64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) (18/1)

```typescript
function minPathSum(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  dp[0][0] = grid[0][0];

  // first row
  for (let c = 1; c < cols; c++) {
    dp[0][c] = dp[0][c - 1] + grid[0][c];
  }

  // first col
  for (let r = 1; r < rows; r++) {
    dp[r][0] = dp[r - 1][0] + grid[r][0];
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      dp[r][c] = grid[r][c] + Math.min(dp[r - 1][c], dp[r][c - 1]);
    }
  }

  return dp[rows - 1][cols - 1];
}

// Time: O(m*n)
// Space: O(m*n)

function minPathSum2(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const dp = new Array(cols).fill(0);

  dp[0] = grid[0][0];

  // first row
  for (let c = 1; c < cols; c++) {
    dp[c] = dp[c - 1] + grid[0][c];
  }

  for (let r = 1; r < rows; r++) {
    dp[0] = dp[0] + grid[r][0];
    for (let c = 1; c < cols; c++) {
      dp[c] = grid[r][c] + Math.min(dp[c], dp[c - 1]);
    }
  }

  return dp[cols - 1];
}
2;
// Time: O(m*n)
// Space: O(n)

function minPathSum(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const cache = Array.from({ length: rows }, () => Array(cols).fill(-1));

  const dfs = (r: number, c: number) => {
    if (r >= rows || c >= cols) return Infinity;

    if (r === rows - 1 && c === cols - 1) return grid[rows - 1][cols - 1];

    if (cache[r][c] !== -1) return cache[r][c];

    const right = dfs(r, c + 1);
    const bottom = dfs(r + 1, c);

    cache[r][c] = grid[r][c] + Math.min(right, bottom);

    return cache[r][c];
  };

  return dfs(0, 0);
}

// Time: O(m*n)
// Space: O(m*n)


```



### ***[97. Interleaving String](https://leetcode.com/problems/interleaving-string/) (18/1)

```typescript
function isInterleave(s1: string, s2: string, s3: string): boolean {
  const m = s1.length;
  const n = s2.length;

  if (m + n !== s3.length) return false;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  dp[m][n] = true;

  for (let i = m; i >= 0; i--) {
    for (let j = n; j >= 0; j--) {
      if (i === m && j == n) continue;

      if (i < m && s1[i] === s3[i + j] && dp[i + 1][j]) {
        dp[i][j] = true;
      }

      if (j < n && s2[j] === s3[i + j] && dp[i][j + 1]) {
        dp[i][j] = true;
      }
    }
  }
  return dp[0][0];
}

function isInterleave2(s1: string, s2: string, s3: string): boolean {
  const m = s1.length;
  const n = s2.length;

  if (m + n !== s3.length) return false;

  const memo = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(undefined),
  );

  const dfs = (i: number, j: number): boolean => {
    if (i === m && j === n) return true;

    if (memo[i][j] !== undefined) return memo[i][j];

    const k = i + j;
    let ok = false;

    if (i < m && s1[i] === s3[k] && dfs(i + 1, j)) {
      ok = true;
    } else if (j < n && s2[j] === s3[k] && dfs(i, j + 1)) {
      ok = true;
    }

    memo[i][j] = ok;
    return memo[i][j];
  };

  return dfs(0, 0);
}

// Time: O(m*n)
// Space: O(m*n)

```



### **[172. Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/) (18/1)

```typescript

function trailingZeroes(n: number): number {
  let count = 0;

  while (n) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}

// Time: O(Log(n))
// Space: O(1)

```



### **[1161. Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/) (19/1)

```typescript
function maxLevelSum(root: TreeNode | null): number {
  if (!root) return 0;

  let level = 1;
  let bestLevel = 1;
  let bestSum = root.val;
  let head = 0;
  let queue = [root];

  while (head < queue.length) {
    const size = queue.length - head;
    let sum = 0;

    for (let i = 0; i < size; i++) {
      const node = queue[head++];

      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (sum > bestSum) {
      bestSum = sum;
      bestLevel = level;
    }

    level++;
  }

  return bestLevel;
}

function maxLevelSum2(root: TreeNode | null): number {
  if (!root) return 0;

  const levelSum: number[] = [];

  const dfs = (node: TreeNode, level: number) => {
    if (!node) return;

    if (levelSum.length < level) {
      levelSum.push(0);
    }

    levelSum[level - 1] += node.val;

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 1);

  let maxLevelSum = levelSum[0];
  let level = 1;

  for (let i = 0; i < levelSum.length; i++) {
    if (levelSum[i] > maxLevelSum) {
      maxLevelSum = levelSum[i];
      level = i + 1;
    }
  }

  return level;
}

// Time: O(n)
// Space: O(n)

```



### **[547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/) (19/1)

```typescript

function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;

  const adjacencyList = Array.from({ length: n + 1 }, () => Array(n + 1));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (r === c) continue;
      if (isConnected[r][c] === 1) {
        adjacencyList[r + 1].push(c + 1);
      }
    }
  }

  const visited = new Array(n + 1).fill(0);

  const dfs = (city: number) => {
    if (visited[city] === 1) return;
    visited[city] = 1;
    for (let neigh of adjacencyList[city]) {
      if (visited[neigh] === 0) {
        dfs(neigh);
      }
    }
  };

  let num = 0;

  for (let i = 1; i <= n; i++) {
    if (visited[i] === 0) {
      num++;
      dfs(i);
    }
  }

  return num;
}

function findCircleNum2(isConnected: number[][]): number {
  const n = isConnected.length;

  const adjacencyList = Array.from({ length: n + 1 }, () => Array(n + 1));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (r === c) continue;
      if (isConnected[r][c] === 1) {
        adjacencyList[r + 1].push(c + 1);
      }
    }
  }

  const visited = new Array(n + 1).fill(0);

  const dfs = (city: number) => {
    const stack = [city];
    visited[city] = 1;
    while (stack.length) {
      const node = stack.pop();
      for (let neigh of adjacencyList[node]) {
        if (visited[neigh] === 0) {
          visited[neigh] = 1;
          stack.push(neigh);
        }
      }
    }
  };

  let num = 0;

  for (let i = 1; i <= n; i++) {
    if (visited[i] === 0) {
      num++;
      dfs(i);
    }
  }

  return num;
}

function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);

  const dfs = (city: number) => {
    visited[city] = true;
    const row = isConnected[city];
    for (let i = 0; i < n; i++) {
      if (!visited[i] && row[i] === 1) {
        dfs(i);
      }
    }
  };

  let province = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      province++;
      dfs(i);
    }
  }

  return province;
}

// Time: O(n^2)
// Space: O(n)

```

