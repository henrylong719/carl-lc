function shortest_window_sort(arr: number[]): number {
  let low = 0;
  let high = arr.length - 1;

  // find the first index out of order from left
  while (low < arr.length && arr[low] <= arr[low + 1]) {
    low++;
  }

  // all numbers are in ascending order
  if (low === arr.length - 1) return 0;

  // find the first index out of order from right
  while (high > 0 && arr[high - 1] <= arr[high]) {
    high--;
  }

  // find the min and max number in the subarray between low and high

  let maxNumInSubArr = -Infinity;
  let minNumInSubArr = Infinity;

  for (let k = low; k <= high; k++) {
    maxNumInSubArr = Math.max(maxNumInSubArr, arr[k]);
    minNumInSubArr = Math.min(minNumInSubArr, arr[k]);
  }

  // extend the low from left
  while (low > 0 && arr[low - 1] > minNumInSubArr) {
    low--;
  }

  // extend the high from right
  while (high < arr.length - 1 && arr[high + 1] < maxNumInSubArr) {
    high++;
  }

  return high - low + 1;
}

console.log(shortest_window_sort([1, 2, 3, 3, 3]));
