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
