// upper bound
// smallest index in a sorted array where the element is greater than the target

const upperBound1 = (target: number, arr: number[]) => {
  let lo = 0;
  let hi = arr.length - 1;
  let ans = -1;

  // [1, 2, 2, 3, 4]

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] > target) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return ans;
};

// 0
upperBound1(0, [1, 2, 2, 3, 4]);

// 1
upperBound1(1, [1, 2, 2, 3, 4]);

// 4
upperBound1(3, [1, 2, 2, 3, 4]);

// -1
upperBound1(4, [1, 2, 2, 3, 4]);
