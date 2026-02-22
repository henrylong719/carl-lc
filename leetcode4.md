### **[888. Fair Candy Swap](https://leetcode.com/problems/fair-candy-swap/) (6/2)

```typescript
function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  aliceSizes.sort((a, b) => a - b);
  bobSizes.sort((a, b) => a - b);

  const aliceSum = aliceSizes.reduce((acc, cur) => acc + cur, 0);
  const bobSum = bobSizes.reduce((acc, cur) => acc + cur, 0);

  for (const a of aliceSizes) {
    let l = 0;
    let r = bobSizes.length - 1;

    while (l <= r) {
      const mid = Math.floor((l + r) / 2);

      const v = bobSizes[mid];

      if (aliceSum - a + v === bobSum - v + a) {
        return [a, v];
      }
      if (aliceSum - a + v > bobSum - v + a) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
}

// Time: O(nlog(n))
// Space: O(1)

function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const aliceSum = aliceSizes.reduce((acc, cur) => acc + cur, 0);
  const bobSum = bobSizes.reduce((acc, cur) => acc + cur, 0);

  // aliceSum - a + b = bobSum - b + a
  // 2 * b = bobSum - aliceSum + 2 * a
  // b = (bobSum - aliceSum) / 2 + a

  const delta = (bobSum - aliceSum) / 2;

  const set = new Set(bobSizes);

  for (const a of aliceSizes) {
    const b = a + delta;
    if (set.has(b)) return [a, b];
  }
}

// Time: O(n)
// Space: O(n)


```



### **[1539. Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/) (8/2)

```typescript
function findKthPositive(arr: number[], k: number): number {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const missing = arr[mid] - (mid + 1);
    if (missing >= k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l + k;
}

// Time: O(log(n))
// Space: O(1)


```



### **[2540. Minimum Common Value](https://leetcode.com/problems/minimum-common-value/) (9/2)

```typescript
function getCommon(nums1: number[], nums2: number[]): number {
  const binarySearch = (arr: number[], target: number) => {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);

      if (arr[mid] === target) {
        return true;
      }

      if (arr[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return false;
  };

  for (let num of nums1) {
    if (binarySearch(nums2, num)) return num;
  }

  return -1;
}

// Time: O(nlog(n))
// Space: O(1)

function getCommon(nums1: number[], nums2: number[]): number {
  const set2 = new Set(nums2);

  for (let num of nums1) {
    if (set2.has(num)) return num;
  }

  return -1;
}

// Time: O(n)
// Space: O(n)

function getCommon(nums1: number[], nums2: number[]): number {
  let p1 = 0;
  let p2 = 0;

  // make sure all element are accessiable if two arrays in one loop
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      return nums1[p1];
    }

    if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return -1;
}

// Time: O(n)
// Space: O(1)


```



### **[1608. Special Array With X Elements Greater Than or Equal X](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/) (10/1)

```typescript
function specialArray(nums: number[]): number {
  let n = nums.length;
  if (n === 0) return -1;
  nums.sort((a, b) => a - b);

  const leftBound = (arr: number[], target: number) => {
    let l = 0;
    let r = arr.length - 1;
    let idx = -1;

    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);

      if (arr[mid] >= target) {
        r = mid - 1;
        idx = mid;
      } else {
        l = mid + 1;
      }
    }
    return idx;
  };

  for (let i = 0; i <= n; i++) {
    const idx = leftBound(nums, i);

    if (idx === -1) continue;
    if (n - idx === i) return i;
  }

  return -1;
}

// Time: O(nlog(n))
// Space: O(1)

function specialArray(nums: number[]): number {
  const n = nums.length;
  const freq = new Array(n + 1).fill(0);

  for (const num of nums) {
    freq[Math.min(num, n)]++;
  }

  let gt = 0;

  for (let i = n; i >= 0; i--) {
    gt += freq[i];

    if (gt === i) {
      return i;
    }
  }

  return -1;
}

// Time: O(n)
// Space: O(n)


```



### ** **[3477. Fruits Into Baskets II](https://leetcode.com/problems/fruits-into-baskets-ii/) (11/2)

`can have a better solution`

```typescript

function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  let count = 0;
  for (const f of fruits) {
    let valid = false;
    for (let i = 0; i < baskets.length; i++) {
      const b = baskets[i];
      if (b >= f) {
        valid = true;
        baskets[i] = 0;
        break;
      }
    }
    if (!valid) count++;
  }

  return count;
}

// Time: O(m*n)
// Space: O(1)


```



### **[1385. Find the Distance Value Between Two Arrays](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/) (14/2)

```typescript
function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number,
): number {
  const findClosest = (arr: number[], target: number) => {
    let res = arr[0];
    let l = 0;
    let h = arr.length - 1;

    while (l <= h) {
      const mid = l + Math.floor((h - l) / 2);

      if (Math.abs(arr[mid] - target) < Math.abs(res - target)) {
        res = arr[mid];
      }

      if (arr[mid] === target) {
        return target;
      } else if (arr[mid] > target) {
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    return res;
  };

  arr2.sort((a, b) => a - b);

  let count = 0;

  for (const num1 of arr1) {
    const closest = findClosest(arr2, num1);
    if (Math.abs(num1 - closest) > d) count++;
  }

  return count;
}

// Time: O(nlog(n))
// Space: O(1)

```



### **[2389. Longest Subsequence With Limited Sum](https://leetcode.com/problems/longest-subsequence-with-limited-sum/) (15/2)

```typescript
function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);

  const prefix = new Array(nums.length).fill(0);

  prefix[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = nums[i] + prefix[i - 1];
  }

  const lowerBound = (arr: number[], target: number) => {
    let l = 0;
    let h = arr.length - 1;
    let res = -1;

    while (l <= h) {
      const mid = l + Math.floor((h - l) / 2);

      if (arr[mid] <= target) {
        l = mid + 1;
        res = mid;
      } else {
        h = mid - 1;
      }
    }
    return res;
  };

  const res = [];

  for (let q of queries) {
    const lo = lowerBound(prefix, q);
    res.push(lo + 1);
  }

  return res;
}

function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);

  const prefix = new Array(nums.length).fill(0);

  prefix[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = nums[i] + prefix[i - 1];
  }

  const findClosest = (arr: number[], target: number) => {
    let l = 0;
    let h = arr.length - 1;
    let res = -1;
    let diff = Infinity;

    while (l <= h) {
      const mid = l + Math.floor((h - l) / 2);

      if (target >= arr[mid] && target - arr[mid] < diff) {
        res = mid;
        diff = target - arr[mid];
      }

      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] <= target) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }

    return res;
  };

  const res: number[] = [];

  for (let q of queries) {
    const lo = findClosest(prefix, q);
    res.push(lo + 1);
  }

  return res;
}

function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);

  const prefix = new Array(nums.length).fill(0);

  prefix[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = nums[i] + prefix[i - 1];
  }

  const upperBound = (arr: number[], target: number) => {
    let l = 0;
    let h = arr.length;

    while (l < h) {
      const mid = l + Math.floor((h - l) / 2);

      if (arr[mid] <= target) {
        l = mid + 1;
      } else {
        h = mid;
      }
    }

    return l;
  };

  const res: number[] = [];

  for (let q of queries) {
    const hi = upperBound(prefix, q);
    res.push(hi);
  }

  return res;
}

// Time: O(nlog(n))
// Space: O(n)

```



### **[2089. Find Target Indices After Sorting Array](https://leetcode.com/problems/find-target-indices-after-sorting-array/) (16/2)

```typescript
function targetIndices(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b);

  const lowerBound = (arr: number[], target: number) => {
    let l = 0;
    let h = arr.length - 1;
    let res = arr.length;

    while (l <= h) {
      const mid = l + Math.floor((h - l) / 2);

      if (arr[mid] >= target) {
        h = mid - 1;
        res = mid;
      } else {
        l = mid + 1;
      }
    }
    return res;
  };

  const idx = lowerBound(nums, target);
  const hIdx = lowerBound(nums, target + 1);

  if (idx === nums.length || nums[idx] !== target) return [];

  const ans = [];

  for (let i = idx; i < hIdx; i++) {
    ans.push(i);
  }

  return ans;
}

// Time: O(nlog(n))
// Space: O(n)

function targetIndices(nums: number[], target: number): number[] {
  let less = 0;
  let equal = 0;

  for (const num of nums) {
    if (num < target) less++;
    if (num === target) equal++;
  }

  let res: number[] = [];

  for (let i = 0; i < equal; i++) {
    res.push(less + i);
  }

  return res;
}

// Time: O(n)
// Space: O(n)


```



### **[1351. Count Negative Numbers in a Sorted Matrix](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/) (17/2)

```typescript
function countNegatives(grid: number[][]): number {
  function findFirstNegative(arr: number[]) {
    let l = 0;
    let h = arr.length;

    while (l < h) {
      const mid = l + Math.floor((h - l) / 2);

      if (arr[mid] >= 0) {
        l = mid + 1;
      } else {
        h = mid;
      }
    }

    return l;
  }

  let count = 0;

  for (const arr of grid) {
    const idx = findFirstNegative(arr);
    count += arr.length - idx;
  }

  return count;
}

// Time: O(mlogn)
// Space: O(1)

function countNegatives(grid: number[][]): number {
  let rows = grid.length;
  let cols = grid[0].length;
  let c = 0;
  let count = 0;

  for (let r = rows - 1; r >= 0; r--) {
    const arr = grid[r];

    while (arr[c] >= 0) {
      c++;
    }

    count += cols - c;
  }

  return count;
}

// Time: O(m + n)
// Space: O(1)


```



### *[559. Maximum Depth of N-ary Tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/) (18/2)

```typescript
function maxDepth(root: _Node | null): number {
  if (!root) return 0;

  let q = [root];
  let level = 0;

  while (q.length) {
    level++;
    const next = [];
    for (const node of q) {
      for (const child of node.children) {
        next.push(child);
      }
    }
    q = next;
  }

  return level;
}
// Time: O(n)
// Space: O(w)

function maxDepth(root: _Node | null): number {
  if (!root) return 0;

  let best = 0;

  for (const child of root.children) {
    best = Math.max(best, maxDepth(child));
  }

  return 1 + best;
}

// Time: O(n)
// Space: O(h)


```



### *[993. Cousins in Binary Tree](https://leetcode.com/problems/cousins-in-binary-tree/) (19/2)

```typescript
function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) return false;

  // [node, parent]
  let q: [TreeNode, number | null][] = [[root, null]];

  while (q.length > 0) {
    const next = [];

    let xParent = null;
    let yParent = null;

    for (const [node, parent] of q) {
      if (node.val === x) {
        xParent = parent;
      } else if (node.val === y) {
        yParent = parent;
      }

      if (node.left) {
        next.push([node.left, node.val]);
      }
      if (node.right) {
        next.push([node.right, node.val]);
      }
    }

    if (xParent !== null && yParent !== null) {
      if (xParent === null || yParent === null) return false;
      return xParent !== yParent;
    }

    q = next;
  }

  return false;
}

// Time: O(n)
// Space: O(w)

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) return false;

  let xParent = null;
  let yParent = null;
  let xLevel = -1;
  let yLevel = -1;

  const dfs = (node: TreeNode | null, parent: TreeNode, level: number) => {
    if (!node) return;

    if (node.val === x) {
      xParent = parent;
      xLevel = level;
    } else if (node.val === y) {
      yParent = parent;
      yLevel = level;
    }

    dfs(node.left, node, level + 1);
    dfs(node.right, node, level + 1);
  };

  dfs(root, null, 0);

  return xParent !== yParent && xLevel === yLevel;
}

// Time: O(n)
// Space: O(h)


```



### **[897. Increasing Order Search Tree](https://leetcode.com/problems/increasing-order-search-tree/) (19/2)

```typescript

function increasingBST(root: TreeNode | null): TreeNode | null {
  const dummy = new TreeNode(0);
  let tail = dummy;

  const inOrder = (node: TreeNode | null) => {
    if (!node) return;

    inOrder(node.left);

    const right = node.right;
    node.left = null;
    tail.right = node;
    tail = node;

    inOrder(right);
  };

  inOrder(root);

  return dummy.right;
}

// Time: O(n)
// Space: O(h)

```



### [541. Reverse String II](https://leetcode.com/problems/reverse-string-ii/) (21/2)

```typescript
function reverseStr(s: string, k: number): string {
  if (k <= 1) return s;
  const arr = s.split('');

  for (let i = 0; i < arr.length; i += 2 * k) {
    let start = i;
    let end = Math.min(start + k - 1, arr.length - 1);
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  return arr.join('');
}

// Time: O(n)
// Space: O(n) array


```

