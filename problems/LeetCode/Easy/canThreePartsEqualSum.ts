function canThreePartsEqualSum(arr: number[]): boolean {
  const total = arr.reduce((acc, cur) => cur + acc);

  if (total % 3 !== 0) return false;

  const target = total / 3;

  let sum = 0;
  let parts = 0;

  // keep at least one elements for part 3
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i];
    sum += num;
    if (sum === target) {
      parts += 1;
      sum = 0;
      if (parts === 2) return true;
    }
  }

  return false;
}

// Time: O(n)
// Space: O(1)
