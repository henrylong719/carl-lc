function minimumAbsoluteDifference(arr: number[]): number {
  arr.sort((a, b) => a - b);

  let windowStart = 0;

  let min = Math.abs(arr[1] - arr[0]);

  for (let windowEnd = 1; windowEnd < arr.length; windowEnd++) {
    const diff = Math.abs(arr[windowEnd] - arr[windowStart]);

    min = Math.min(min, diff);

    windowStart++;
  }

  return min;
}

function minimumAbsoluteDifference2(arr: number[]): number {
  arr.sort((a, b) => a - b);

  let min = Math.abs(arr[1] - arr[0]);

  for (let i = 1; i < arr.length - 1; i++) {
    min = Math.min(min, Math.abs(arr[i + 1] - arr[i]));
  }

  return min;
}

console.log(minimumAbsoluteDifference([-2, 2, 4]));
