function maximizeExpressionOfThree(nums: number[]): number {
  let a = -Infinity;
  let b = -Infinity;
  let c = Infinity;

  for (const num of nums) {
    if (num > a) {
      b = a;
      a = num;
    } else if (num > b) {
      b = num;
    }

    if (num < c) {
      c = num;
    }
  }

  return a + b - c;
}

// Time: O(n)
// Space: O(1)
