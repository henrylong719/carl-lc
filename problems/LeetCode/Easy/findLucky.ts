function findLucky(arr: number[]): number {
  const count = new Array(Math.max(...arr) + 1).fill(0);

  for (const num of arr) count[num]++;

  const lucky: number[] = [];

  for (let i = 1; i < count.length; i++) {
    if (count[i] === i) lucky.push(i);
  }

  return lucky.length > 0 ? Math.max(...lucky) : -1;
}

// Time: O(n)
// Space: O(n)
