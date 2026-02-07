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

