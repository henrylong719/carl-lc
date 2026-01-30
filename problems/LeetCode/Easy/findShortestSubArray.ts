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

findShortestSubArray([1, 2, 2, 3, 1]);
