function successfulPairs(
  spells: number[],
  potions: number[],
  success: number,
): number[] {
  potions.sort((a, b) => a - b);

  const lowerBound = (s: number) => {
    let lo = 0;
    let hi = potions.length - 1;

    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      const val = potions[mid] * s;
      if (val >= success) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  };

  let res: number[] = [];

  for (const s of spells) {
    const idx = lowerBound(s);
    res.push(potions.length - idx);
  }

  return res;
}
