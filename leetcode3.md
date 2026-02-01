

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



### [1827. Minimum Operations to Make the Array Increasing](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/) (23/1)

```typescript

function minOperations(nums: number[]): number {
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) continue;
    const expected = nums[i - 1] + 1;
    res += expected - nums[i];
    nums[i] = expected;
  }
  return res;
}

// Time: O(n)
// Space: O(1)

```



### [1736. Latest Time by Replacing Hidden Digits](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/) (24/1)

```typescript
function maximumTime(time: string): string {
  const t = [...time];

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== '?') continue;
    if (i === 0) {
      if (Number(t[1]) <= 3 || t[1] === '?') {
        t[i] = '2';
      } else {
        t[i] = '1';
      }
    } else if (i === 1) {
      if (t[0] === '2') {
        t[i] = '3';
      } else {
        t[i] = '9';
      }
    } else if (i === 3) {
      t[i] = '5';
    } else if (i === 4) {
      t[i] = '9';
    }
  }

  return t.join('');
}

// Time: O(n)
// Space: O(n)

```



### [415. Add Strings](https://leetcode.com/problems/add-strings/) (24/1)

```typescript

function addStrings(num1: string, num2: string): string {
  let carry = 0;
  let res = [];
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = 0;
    sum += carry;

    if (i >= 0) {
      sum += Number(num1[i]);
      i--;
    }

    if (j >= 0) {
      sum += Number(num2[j]);
      j--;
    }

    res.push(String(sum % 10));
    carry = Math.floor(sum / 10);
  }

  return res.reverse().join('');
}

// Time: O(n)
// Space: O(n)

```



### **[496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) (24/1)

```typescript

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const next = new Map<number, number>();
  const stack: number[] = [];

  for (const num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      next.set(stack.pop()!, num);
    }
    stack.push(num);
  }

  return nums1.map((num) => next.get(num) ?? -1);
}

// Time: O(num1.length + num2.length)
// Space: O(num2.length)

```



### ***[394. Decode String](https://leetcode.com/problems/decode-string/)(24/1)

```typescript

function decodeString(s: string): string {
  const countStack: number[] = [];
  const strStack: string[] = [];

  let count = 0;
  let curr = '';

  for (const ch of s) {
    if (ch >= '0' && ch <= '9') {
      count = count * 10 + ch.charCodeAt(0) - '0'.charCodeAt(0);
    } else if (ch === '[') {
      countStack.push(count);
      strStack.push(curr);
      count = 0;
      curr = '';
    } else if (ch === ']') {
      const repeat = countStack.pop()!;
      const prev = strStack.pop()!;
      curr = prev + curr.repeat(repeat);
    } else {
      curr += ch;
    }
  }

  return curr;
}

// Time: O(n + outputLenght) because you must actually build the oupput)
// Space: O(n) stack + output

```



### **[739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) (24/1)

```typescript
function dailyTemperatures(temperatures: number[]): number[] {
  const s: number[] = [];
  const res: number[] = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (s.length > 0 && temperatures[i] > temperatures[s[s.length - 1]]) {
      const idx = s.pop()!;
      res[idx] = i - idx;
    }
    s.push(i);
  }
  return res;
}

// Time: O(n)
// Space: O(n)

```



### **[434. Number of Segments in a String](https://leetcode.com/problems/number-of-segments-in-a-string/) (25/1)

```typescript
function countSegments(s: string): number {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ' && (s[i + 1] === ' ' || i + 1 === s.length)) {
      res++;
    }
  }

  return res;
}

function countSegments2(s: string): number {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ' && (i == 0 || s[i - 1] === ' ')) {
      count++;
    }
  }
  return count;
}

// Time: O(n)
// Space: O(1)


```



### **[414. Third Maximum Number](https://leetcode.com/problems/third-maximum-number/) (25/1)

```typescript

function thirdMax(nums: number[]): number {
    const sorted = [...new Set(nums)].sort((a,b)=> b-a);
    return sorted[2] ?? sorted[0];
};

// Time: O(nlogn)
// Space: O(1)

function thirdMax(nums: number[]): number {
  let first: number | null = null;
  let second: number | null = null;
  let third: number | null = null;

  const set = new Set(nums);

  for (const num of set) {
    // if (num === first || num === second || num === third) continue;
    if (first === null || num > first) {
      third = second;
      second = first;
      first = num;
    } else if (second === null || num > second) {
      third = second;
      second = num;
    } else if (third === null || num > third) {
      third = num;
    }
  }

  return third ?? first;
}

// Time: O(n)
// Space: O(1)


```



### **[1974. Minimum Time to Type Word Using Special Typewriter](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/) (25/1)

```typescript
function minTimeToType(word: string): number {
  let prev = 'a';
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    count += minSeconds(prev, word[i]) + 1;
    prev = word[i];
  }
  return count;
}

function minSeconds(start: string, end: string) {
  const clockwise = Math.abs(end.charCodeAt(0) - start.charCodeAt(0));
  const counterClockwise = 26 - clockwise;
  return Math.min(clockwise, counterClockwise);
}

// Time: O(n)
// Space: O(1)

```



### **[347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) (25/1)

```typescript

function topKFrequent(nums: number[], k: number): number[] {
  const counter = new Map<number, number>();

  for (const n of nums) {
    counter.set(n, (counter.get(n) ?? 0) + 1);
  }

  const arr: [number, number][] = [];

  for (const [key, value] of counter) {
    arr.push([key, value]);
  }

  arr.sort((a, b) => b[1] - a[1]);

  const res: number[] = [];

  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }

  return res;
}

// Time: O(nlogn)
// Space: O(n)

function topKFrequent(nums: number[], k: number): number[] {
  const counter = new Map<number, number>();

  for (const n of nums) {
    counter.set(n, (counter.get(n) ?? 0) + 1);
  }

  const bucket = Array.from({ length: nums.length + 1 }, () => []);

  for (const [num, fre] of counter) {
    bucket[fre].push(num);
  }

  const res = [];

  for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
    for (const n of bucket[i]) {
      res.push(n);
      if (res.length === k) break;
    }
  }

  return res;
}

// Time: O(n)
// Space: O(n)

```





### **[448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) (26/1)

```typescript
function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums);
  const res: number[] = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) res.push(i);
  }

  return res;
}

// Time: O(n)
// Space: O(n)

function findDisappearedNumbers2(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] > 0) nums[idx] = -nums[idx];
  }

  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }

  return res;
}

// Time: O(n)
// Space: O(1)


```





### [2037. Minimum Number of Moves to Seat Everyone](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/) (26/1)

```typescript
function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let moves = 0;

  for (let i = 0; i < seats.length; i++) {
    moves += Math.abs(seats[i] - students[i]);
  }

  return moves;
}

// Time: O(nlogn)
// Space: O(1)


```



### [1160. Find Words That Can Be Formed by Characters](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/) (26/1)

```typescript

function countCharacters(words: string[], chars: string): number {
  const counter = new Array(26).fill(0);

  for (const char of chars) {
    const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
    counter[idx]++;
  }

  let sum = 0;

  for (const word of words) {
    const _counter = [...counter];
    let isGood = true;
    for (const char of word) {
      const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
      if (_counter[idx] > 0) {
        _counter[idx]--;
      } else {
        isGood = false;
        break;
      }
    }
    if (isGood) sum += word.length;
  }

  return sum;
}

// Time: O(C + S)
// C: length of chars
// S: total chars in the words

// Space: O(1)
// Counter: 26

```



### *** [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) (26/1)

```typescript
function findKthLargest(nums: number[], k: number): number {
  let minValue = Infinity;
  let maxValue = -Infinity;

  for (const x of nums) {
    if (x < minValue) minValue = x;
    if (x > maxValue) maxValue = x;
  }

  const count = new Array(maxValue - minValue + 1).fill(0);

  for (const n of nums) {
    count[n - minValue]++;
  }

  let remaining = k;
  let res = null;

  for (let i = count.length - 1; i >= 0; i--) {
    remaining -= count[i];
    if (remaining <= 0) {
      res = i + minValue;
      break;
    }
  }
  return res as number;
}

// Time: O(n)
// Space: O(n)

```



### [506. Relative Ranks](https://leetcode.com/problems/relative-ranks/) (27/1)

```typescript
function findRelativeRanks(score: number[]): string[] {
  const sorted = [...score].sort((a, b) => b - a);

  const map = new Map<number, number>();

  for (let i = 0; i < sorted.length; i++) {
    map.set(sorted[i], i);
  }

  const res = new Array(score.length).fill('');

  for (let i = 0; i < score.length; i++) {
    const s = score[i];

    if (s === sorted[0]) {
      res[i] = 'Gold Medal';
    } else if (s === sorted[1]) {
      res[i] = 'Silver Medal';
    } else if (s === sorted[2]) {
      res[i] = 'Bronze Medal';
    } else {
      res[i] = String(map.get(score[i]) + 1);
    }
  }
  return res;
}

function findRelativeRanks(score: number[]): string[] {
  const sorted = [...score].sort((a, b) => b - a);

  const bucket = new Array(sorted[0] + 1);

  for (let i = 0; i < sorted.length; i++) {
    bucket[sorted[i]] = i + 1;
  }

  const res: string[] = [];

  for (let i = 0; i < score.length; i++) {
    const s = score[i];

    const rank = bucket[s];

    if (rank === 1) {
      res.push('Gold Medal');
    } else if (rank === 2) {
      res.push('Silver Medal');
    } else if (rank === 3) {
      res.push('Bronze Medal');
    } else {
      res.push(String(rank));
    }
  }

  return res;
}

// Time: O(nlogn)
// Space: O(N)


```



### **[2078. Two Furthest Houses With Different Colors](https://leetcode.com/problems/two-furthest-houses-with-different-colors/) (27/1)

```typescript

function maxDistance(colors: number[]): number {
  let res = 0;
  const n = colors.length;

  for (let i = 0; i < n; i++) {
    if (colors[i] !== colors[n - 1]) res = Math.max(res, n - 1 - i);
  }

  for (let i = n - 1; i >= 0; i--) {
    if (colors[i] !== colors[0]) res = Math.max(res, i);
  }

  return res;
}

// Time: O(n)
// Space: O(1)

```



### **[973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) (27/1)

```typescript
function kClosest(points: number[][], k: number): number[][] {
  const distances: number[][] = [];

  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const dist = Math.sqrt(p[0] * p[0] + p[1] * p[1]);
    distances.push([i, dist]);
  }

  distances.sort((a, b) => a[1] - b[1]);

  const res: number[][] = [];

  for (let i = 0; i < k; i++) {
    const idx = distances[i][0];
    res.push(points[idx]);
  }

  return res;
}

function kClosest(points: number[][], k: number): number[][] {
  points.sort(
    (a, b) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]),
  );
  return points.slice(0, k);
}

// Time: O(nlogn)
// Space: O(n)

```



### *[2144. Minimum Cost of Buying Candies With Discount](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/) (28/1)

```typescript
function minimumCost(cost: number[]): number {
  cost.sort((a, b) => b - a);

  let minCost = 0;

  for (let i = 0; i < cost.length; i++) {
    if (i % 3 !== 2) minCost += cost[i];
  }

  return minCost;
}

// Time: O(nlogn)
// Space: O(1)

```


### **[2335. Minimum Amount of Time to Fill Cups](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/) (28/1)

```typescript
function fillCups(amount: number[]): number {
  let seconds = 0;

  while (amount[0] || amount[1] || amount[2]) {
    seconds++;
    amount.sort((a, b) => b - a);
    if (amount[0] > 0) amount[0]--;
    if (amount[1] > 0) amount[1]--;
  }
  return seconds;
}

// Time: O(n) * n(log(n))
// Space: O(1)

function fillCups(amount: number[]): number {
  const sum = amount[0] + amount[1] + amount[2];
  const mx = Math.max(amount[0], amount[1], amount[2]);
  return Math.max(mx, Math.ceil(sum / 2));
}

// Time: O(1)
// Space: O(1)


```



### ***[287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) (28/1)

```typescript
function findDuplicate(nums: number[]): number {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) break;
  }

  let slow2 = 0;

  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];
    if (slow2 === slow) break;
  }

  return slow;
}

// Time: O(n)
// Space: O(1)

```



### **[628. Maximum Product of Three Numbers](https://leetcode.com/problems/maximum-product-of-three-numbers/) (29/1)

```typescript
function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => b - a);
  const pro1 = nums[0] * nums[1] * nums[2];
  const pro2 = nums[nums.length - 1] * nums[nums.length - 2] * nums[0];

  return Math.max(pro1, pro2);
}

// Time: O(nlog(n))
// Space: O(1)

function maximumProduct(nums: number[]): number {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;

  let min1 = Infinity;
  let min2 = Infinity;

  for (const num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
}

// Time: O(n)
// Space: O(1)

```



### **[697. Degree of an Array](https://leetcode.com/problems/degree-of-an-array/) (29/1)

```typescript

function findShortestSubArray(nums: number[]): number {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const maxFreq = Math.max(...map.values());

  let numsWithMaxFreq = [];

  for (const [key, val] of map) {
    if (val === maxFreq) numsWithMaxFreq.push(key);
  }

  let shortest = Infinity;

  for (const num of numsWithMaxFreq) {
    const len = degreeLength(num, nums);
    shortest = Math.min(len, shortest);
  }

  return shortest;
}

function degreeLength(target: number, nums: number[]) {
  let l = 0;
  let r = nums.length - 1;

  while (nums[l] !== target) l++;
  while (nums[r] !== target) r--;

  return r - l + 1;
}

// Time: O(n^2)
// Space: O(n)

function findShortestSubArray(nums: number[]): number {
  const count = new Map<number, number>();
  const first = new Map<number, number>();
  const last = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!first.has(num)) first.set(num, i);
    last.set(num, i);
    count.set(num, (count.get(num) ?? 0) + 1);
  }

  const maxCount = Math.max(...count.values());

  let minLen = Infinity;

  for (const [key, val] of count) {
    if (val === maxCount) {
      const length = last[key] - first[key] + 1;
      minLen = Math.min(length, minLen);
    }
  }

  return minLen;
}

// Time: O(n)
// Space: O(n)

```



### **[1249. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) (29/1)

```typescript

function minRemoveToMakeValid(s: string): string {
  const pos: number[] = [];
  const res: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(') {
      pos.push(res.length);
      res.push(char);
    } else if (char === ')') {
      if (pos.length === 0) continue;
      pos.pop();
      res.push(char);
    } else {
      res.push(char);
    }
  }

  while (pos.length) {
    const idx = pos.pop();
    res[idx] = '';
  }

  return res.join('');
}

// Time: O(n)
// Space: O(n)

function minRemoveToMakeValid(s: string): string {
  const t: string[] = [];
  let bal = 0;

  for (const char of s) {
    if (char === '(') {
      bal++;
      t.push(char);
    } else if (char === ')') {
      if (bal === 0) continue;
      bal--;
      t.push(char);
    } else {
      t.push(char);
    }
  }

  let res: string[] = [];

  for (let i = t.length - 1; i >= 0; i--) {
    const char = t[i];

    if (char === '(' && bal > 0) {
      bal--;
      continue;
    }
    res.push(char);
  }

  res = res.reverse();
  return res.join('');
}

// Time: O(n)
// Space: O(n)

```



### *[674. Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/) (30/1)

```typescript
function findLengthOfLCIS(nums: number[]): number {
  if (nums.length <= 1) return nums.length;

  let start = 0;
  let longest = 1;

  for (let end = 1; end < nums.length; end++) {
    if (nums[end] > nums[end - 1]) {
      longest = Math.max(longest, end - start + 1);
      continue;
    }
    start = end;
  }

  return longest;
}

function findLengthOfLCIS(nums: number[]): number {
  if (nums.length === 0) return nums.length;

  let longest = 1;
  let cur = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      cur++;
    } else {
      cur = 1;
    }

    if (cur > longest) longest = cur;
  }

  return longest;
}

// Time: O(n)
// Space: O(1)

```



### **[744. Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) (30/1)

```typescript

function nextGreatestLetter(letters: string[], target: string): string {
  for (let i = target.charCodeAt(0) + 1; i <= 'z'.charCodeAt(0); i++) {
    const char = String.fromCharCode(i);
    if (letters.some((c) => c === char)) return char;
  }
  return letters[0];
}

// Time: O(26*n)
// Space: O(1)

function nextGreatestLetter(letters: string[], target: string): string {
  let l = 0;
  let r = letters.length;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    if (letters[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return letters[l % letters.length];
}

function nextGreatestLetter(letters: string[], target: string): string {
  let l = 0;
  let r = letters.length - 1;
  let res = letters[0];

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (letters[mid] > target) {
      res = letters[mid];
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
}

// Time: O(log(n))
// Space: O(1)

```



### ***[518. Coin Change II](https://leetcode.com/problems/coin-change-ii/) (30/1)

```typescript

function change(amount: number, coins: number[]): number {
  const dp = new Array(amount + 1).fill(0);

  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}

// Time: O(n^2)
// Space: O(n)

```



### **[338. Counting Bits](https://leetcode.com/problems/counting-bits/) (31/1)

```typescript

function countBits(n: number): number[] {
  let res: number[] = [];
  for (let i = 0; i <= n; i++) {
    res.push(countOnes(i));
  }
  return res;
}

function countOnes(n: number): number {
  let count = 0;
  while (n > 0) {
    const remainder = n % 2;
    if (n % 2 === 1) count++;
    n = Math.floor(n / 2);
  }
  return count;
}

// Time: O(nlog(n))
// Space: O(n)

function countBits(n: number): number[] {
  const dp: number[] = new Array(n + 1).fill(0);

  // sub always stores the largest power of 2 that is ≤ i.
  let sub = 1;

  for (let i = 1; i <= n; i++) {
    if (sub * 2 === i) {
      sub = i;
    }

    dp[i] = dp[i - sub] + 1;
  }

  return dp;
}

// Time: O(n)
// Space: O(n)

```



### *[2022. Convert 1D Array Into 2D Array](https://leetcode.com/problems/convert-1d-array-into-2d-array/) (31/1)

```typescript

function construct2DArray(
  original: number[],
  m: number,
  n: number,
): number[][] {
  if (m * n !== original.length) return [];
  if (m === 1) return [[...original]];

  const res = Array.from({ length: m }, () => Array(n));

  let idx = 0;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      res[r][c] = original[idx++];
    }
  }

  return res;
}

// Time: O(r*c)
// Space: O(r*c)

function construct2DArray(
  original: number[],
  m: number,
  n: number,
): number[][] {
  if (m * n !== original.length) return [];

  const res: number[][] = [];

  for (let i = 0; i < m; i++) {
    const arr = original.slice(i * n, i * n + n);
    res.push(arr);
  }

  return res;
}

// Time: O(r)
// Space: O(r*c)

```



### ***[901. Online Stock Span](https://leetcode.com/problems/online-stock-span/) (31/1)

```typescript

class StockSpanner {
  private stack: Array<[number, number]>; // [price, span]

  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let span = 1;

    while (
      this.stack.length > 0 &&
      this.stack[this.stack.length - 1][0] <= price
    ) {
      span += this.stack.pop()![1];
    }

    this.stack.push([price, span]);
    return span;
  }
}
// Time: amortized O(1) per next() (each element pushed once, popped once)
// Space: O(n) worst case (strictly decreasing prices)

```



### **[703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) (31/1)

```typescript
class KthLargest {
  private pq: MinPriorityQueue<number>;
  private k: number;

  // Time: mlog(k) m = nums.length
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.pq = new MinPriorityQueue();
    for (const n of nums) this.add(n);
  }

  // Time: log(k)
  add(val: number): number {
    if (this.pq.size() < this.k) {
      this.pq.enqueue(val);
    } else if (this.pq.front() < val) {
      this.pq.dequeue();
      this.pq.enqueue(val);
    }
    return this.pq.front();
  }
}
```



### **[303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) (1/2)

```typescript
class NumArray {
  private prefix: number[];

  // O(n)
  constructor(nums: number[]) {
    this.prefix = new Array(nums.length);
    this.prefix[0] = nums[0];

    for (let i = 1; i < this.prefix.length; i++) {
      this.prefix[i] = this.prefix[i - 1] + nums[i];
    }
  }

  // O(1)
  sumRange(left: number, right: number): number {
    if (left === 0) return this.prefix[right];
    return this.prefix[right] - this.prefix[left - 1];
  }
}


```



### ***[371. Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) (1/2)

```typescript
function getSum(a: number, b: number): number {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a = (a ^ b) | 0; // sum without carry (force 32 bits)
    b = carry | 0; // carry
  }

  return a;
}

// Time:O(1)

/*
Reason: in JavaScript/TypeScript, all bitwise operations work on 32-bit signed integers, so the carry can only “move left” through at most 32 bit positions. Each iteration shifts the carry left (<< 1), and once it shifts past the highest bit, it becomes 0 and the loop stops.

So worst case: ≤ 32 iterations → constant time.
*/

```



### ***[621. Task Scheduler](https://leetcode.com/problems/task-scheduler/) (1/2)

```typescript
function leastInterval(tasks: string[], n: number): number {
  const freq = new Array(26).fill(0);

  for (const t of tasks) {
    freq[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }

  const pq = new MaxPriorityQueue<number>();

  for (const f of freq) {
    if (f === 0) continue;
    pq.enqueue(f);
  }

  let time = 0;
  let head = 0;

  // [time, freq]
  const coolDown: Array<[number, number]> = [];

  while (!pq.isEmpty() || head < coolDown.length) {
    // bring availabe tasks back to pq
    while (head < coolDown.length && coolDown[head][0] <= time) {
      pq.enqueue(coolDown[head++][1]);
    }

    if (pq.isEmpty()) {
      time = coolDown[head][0];
      continue;
    }

    const cnt = pq.dequeue() as number;
    if (cnt - 1 > 0) {
      coolDown.push([time + n + 1, cnt - 1]);
    }
    time++;
  }

  return time;
}

// Time: O(Tlog(m))  m <= 26 -> O(n)
// Space: O(T+m)


```



### ***[853. Car Fleet](https://leetcode.com/problems/car-fleet/) (1/2)

```typescript
function carFleet(target: number, position: number[], speed: number[]): number {
  const sorted = position
    .map((p, i) => [p, speed[i]])
    .sort((a, b) => b[0] - a[0]);

  const stack: number[] = [];

  for (const [p, s] of sorted) {
    const t = (target - p) / s;
    if (stack.length > 0 && stack[stack.length - 1] >= t) {
      continue;
    }
    stack.push(t);
  }

  return stack.length;
}

// Time: O(nlog(n))
// Space: O(n)


```

