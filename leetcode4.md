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



### ****[3477. Fruits Into Baskets II](https://leetcode.com/problems/fruits-into-baskets-ii/) (11/2)

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

