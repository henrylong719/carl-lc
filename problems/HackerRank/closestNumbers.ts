function closestNumbers(arr: number[]): number[] {
  arr.sort((a, b) => a - b);

  let windowStart = 0;
  let min = arr[1] - arr[0];
  let result = [] as number[];

  for (let windowEnd = 1; windowEnd < arr.length; windowEnd++) {
    const diff = arr[windowEnd] - arr[windowStart];

    if (diff === min) {
      result.push(arr[windowStart]);
      result.push(arr[windowEnd]);
      windowStart++;
      continue;
    }

    if (diff < min) {
      min = diff;
      result = [arr[windowStart], arr[windowEnd]];
    }

    windowStart++;
  }

  return result;
}

console.log(
  closestNumbers([
    -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
    266854,
  ])
);
