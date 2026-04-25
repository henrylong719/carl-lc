// smallest index i where arr[i] >= target

const lowerBound2 = (target: number, arr: number[]) => {
  let lo = 0;
  let hi = arr.length - 1;
  let ans = -1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] >= target) {
      hi = mid - 1;
      ans = mid;
    } else {
      lo = mid + 1;
    }
  }

  return ans;
};

// 0
lowerBound2(0, [1, 2, 2, 3, 4]);

// 0
lowerBound2(1, [1, 2, 2, 3, 4]);

// 1
lowerBound2(2, [1, 2, 2, 3, 4]);

// 4
lowerBound2(4, [1, 2, 2, 3, 4]);

// -1
lowerBound2(5, [1, 2, 2, 3, 4]);
