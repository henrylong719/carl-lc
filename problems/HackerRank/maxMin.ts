function maxMin1(k: number, arr: number[]): number {
  arr.sort((a, b) => a - b);
  let windowStart = 0;
  let result = Infinity;

  for (let windowEnd = k - 1; windowEnd < arr.length; windowEnd++) {
    const diff = arr[windowEnd] - arr[windowStart];
    result = Math.min(result, diff);
    windowStart++;
  }
  return result;
}

console.log(maxMin1(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]));
