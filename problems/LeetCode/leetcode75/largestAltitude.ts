function largestAltitude(gain: number[]): number {
  const prefix = new Array(gain.length + 1).fill(0);

  for (let i = 1; i <= gain.length; i++) {
    prefix[i] = prefix[i - 1] + gain[i - 1];
  }

  return Math.max(...prefix);
}

// Time O(n)
// Space O(n)
