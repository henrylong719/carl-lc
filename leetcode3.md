

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



### *** [1466. Reorder Routes to Make All Paths Lead to the City Zero](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/) (20/1)

```typescript

function minReorder(n: number, connections: number[][]): number {
  const adjancencyList = Array.from({ length: n }, () => new Set());
  const undirected = Array.from({ length: n }, () => Array());

  for (let i = 0; i < connections.length; i++) {
    const [src, end] = connections[i];
    undirected[src].push(end);
    undirected[end].push(src);
    adjancencyList[src].add(end);
  }

  let res = 0;
  let visited = new Array(n).fill(false);

  const dfs = (city: number) => {
    visited[city] = true;
    for (const neigh of undirected[city]) {
      if (visited[neigh]) continue;
      if (!adjancencyList[neigh].has(city)) res++;
      dfs(neigh);
    }
  };

  dfs(0);
  return res;
}

function minReorder2(n: number, connections: number[][]): number {
  const graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < connections.length; i++) {
    const [src, end] = connections[i];
    graph[src].push([end, 1]);
    graph[end].push([src, 0]);
  }

  console.log('graph', graph);

  let res = 0;
  let visited = new Array(n).fill(false);

  const dfs = (city: number) => {
    visited[city] = true;

    for (const [neigh, cost] of graph[city]) {
      if (visited[neigh]) continue;
      res += cost;
      dfs(neigh);
    }
  };

  dfs(0);
  return res;
}

console.log(
  minReorder2(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ]),
);

// Time: O(n)
// Space: O(n)

```



### **[994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) (20/1)

```typescript

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

```



### ***[1926. Nearest Exit from Entrance in Maze](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/) (20/1)

`The issue of placing maze[r][c] = '+'; !!!`

```typescript

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

```



### *[1137. N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/) (20/1)

```typescript
function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let a = 0;
  let b = 1;
  let c = 1;

  for (let i = 3; i <= n; i++) {
    let temp = a + b + c;
    a = b;
    b = c;
    c = temp;
  }
  return c;
}

// Time: O(n)
// Space: O(1)

function tribonacci(n: number): number {
  const cache = new Array(38).fill(0);

  const tribonacci = (num: number) => {
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;

    if (cache[num] !== 0) return cache[num];

    cache[num] =
      tribonacci(num - 3) + tribonacci(num - 2) + tribonacci(num - 1);

    return cache[num];
  };

  return tribonacci(n);
}

// Time: O(n)
// Space: O(n)


```



### [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) (22/1)

```typescript

function firstUniqChar(s: string): number {
  const counter = new Array(26).fill(0);

  for (const char of s) {
    const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
    counter[idx]++;
  }

  for (let i = 0; i < s.length; i++) {
    const idx = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if (counter[idx] === 1) return i;
  }
  return -1;
}

function firstUniqChar2(s: string): number {
  const counter: Record<string, number> = {};

  for (const char of s) {
    if (!counter.hasOwnProperty(char)) counter[char] = 0;
    counter[char]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (counter[s[i]] === 1) return i;
  }

  return -1;
}

// Time: O(n)
// Space: O(1)

```



### [485. Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/) (22/1)

```typescript
function findMaxConsecutiveOnes(nums: number[]): number {
  let count = 0;
  let best = 0;

  for (const num of nums) {
    if (num === 0) {
      count = 0;
      continue;
    }

    count++;
    best = Math.max(best, count);
  }

  return best;
}

// Time: O(n)
// Space: O(1)
```



### **[495. Teemo Attacking](https://leetcode.com/problems/teemo-attacking/) (22/1)

```typescript
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  if (duration === 0) return 0;

  let seconds = 0;

  for (let i = 1; i < timeSeries.length; i++) {
    const curr = timeSeries[i];
    const prev = timeSeries[i - 1];

    if (curr > duration + prev) {
      seconds += duration;
    } else {
      seconds += curr - prev;
    }
  }

  seconds += duration;
  return seconds;
}

// Time: O(n)
// Space: O(1)

```



### ***[435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)(22/1)

```typescript

function eraseOverlapIntervals(intervals: number[][]): number {
  // Maximize how many intervals we can keep without overlapping
  intervals.sort((a, b) => a[1] - b[1]);
  let prevEnd = intervals[0][1];
  let res = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      res++;
      continue;
    }
    prevEnd = intervals[i][1];
  }

  return res;
}

// Time: O(nlog(n))
// Space: O(1) exclude sorting

```



### *[350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) (23/1)

```typescript
function intersect(nums1: number[], nums2: number[]): number[] {
  const counter: Record<number, number> = {};

  for (const num of nums2) {
    if (!counter.hasOwnProperty(num)) counter[num] = 0;
    counter[num]++;
  }

  const res = [];

  for (const num of nums1) {
    if (counter.hasOwnProperty(num) && counter[num] > 0) {
      res.push(num);
      counter[num]--;
    }
  }
  return res;
}

function intersect2(nums1: number[], nums2: number[]): number[] {
  let small = nums1;
  let big = nums2;
  const res = [];

  if (nums1.length > nums2.length) [small, big] = [big, small];

  const count = new Map<number, number>();

  for (const num of small) {
    count.set(num, (count.get(num) ?? 0) + 1);
  }

  for (const num of big) {
    if (count.has(num) && count.get(num)! > 0) {
      res.push(num);
      count.set(num, count.get(num)! - 1);
    }
  }

  return res;
}

// Time: O(n)
// Space: O(n)

function intersect3(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let res = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return res;
}

// Time: O(n(log(n)))
// Space: O(n)


```

