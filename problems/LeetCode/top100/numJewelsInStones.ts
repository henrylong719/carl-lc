function numJewelsInStones(jewels: string, stones: string): number {
  const set = new Set(jewels);

  let res = 0;

  for (const s of stones) {
    if (set.has(s)) res++;
  }

  return res;
}

// Time: O(j+s)
// Space: O(j)
