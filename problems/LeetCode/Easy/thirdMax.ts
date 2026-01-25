function thirdMax(nums: number[]): number {
  const sorted = [...new Set(nums)].sort((a, b) => b - a);

  let res = null;
  let count = 0;

  for (const num of sorted) {
    if (count === 0 || count === 2) {
      res = num;
    }
    count++;
  }
  return res;
}

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
