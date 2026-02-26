function duplicateZeros(arr: number[]): void {
  let n = arr.length;

  let zeros = 0;

  for (const num of arr) {
    if (num === 0) zeros++;
  }

  let i = n - 1;
  let j = n + zeros - 1;

  while (i >= 0) {
    if (j < n) arr[j] = arr[i];

    if (arr[i] === 0) {
      j--;
      if (j < n) arr[j] = 0;
    }

    i--;
    j--;
  }
}

// Time: O(n)
// Space: O(1)
