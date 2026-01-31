function countBits(n: number): number[] {
  let res: number[] = [];
  for (let i = 0; i <= n; i++) {
    res.push(countOnes(i));
  }
  return res;
}

function countOnes(n: number): number {
  let count = 0;
  while (n > 0) {
    const remainder = n % 2;
    if (n % 2 === 1) count++;
    n = Math.floor(n / 2);
  }
  return count;
}

// Time: O(nlog(n))
// Space: O(n)

function countBits(n: number): number[] {
  const dp: number[] = new Array(n + 1).fill(0);

  // sub always stores the largest power of 2 that is ≤ i.
  let sub = 1;

  for (let i = 1; i <= n; i++) {
    if (sub * 2 === i) {
      sub = i;
    }

    dp[i] = dp[i - sub] + 1;
  }

  return dp;
}

// Time: O(n)
// Space: O(n)
