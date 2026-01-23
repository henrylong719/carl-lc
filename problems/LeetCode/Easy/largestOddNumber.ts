function largestOddNumber(num: string): string {
  let res = '';

  for (let i = num.length - 1; i >= 0; i--) {
    if (Number(num[i]) % 2 !== 0) {
      res = num.slice(0, i + 1);
      break;
    }
  }
  return res;
}

// Time: O(n)
// Space: O(1)
