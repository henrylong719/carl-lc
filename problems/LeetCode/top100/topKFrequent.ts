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
