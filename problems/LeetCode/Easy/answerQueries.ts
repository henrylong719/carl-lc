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
