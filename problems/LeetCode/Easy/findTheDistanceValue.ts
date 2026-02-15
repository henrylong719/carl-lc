function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number,
): number {
  const findClosest = (arr: number[], target: number) => {
    let res = arr[0];
    let l = 0;
    let h = arr.length - 1;

    while (l <= h) {
      const mid = l + Math.floor((h - l) / 2);

      if (Math.abs(arr[mid] - target) < Math.abs(res - target)) {
        res = arr[mid];
      }

      if (arr[mid] === target) {
        return target;
      } else if (arr[mid] > target) {
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    return res;
  };

  arr2.sort((a, b) => a - b);

  let count = 0;

  for (const num1 of arr1) {
    const closest = findClosest(arr2, num1);
    if (Math.abs(num1 - closest) > d) count++;
  }

  return count;
}

// Time: O(nlog(n))
// Space: O(1)
