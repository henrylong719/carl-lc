function uniqueOccurrences(arr: number[]): boolean {
  const map: Map<number, number> = new Map();

  for (let num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const seen = new Set();

  for (const count of map.values()) {
    if (seen.has(count)) return false;
    seen.add(count);
  }

  return true;
}

// Time: O(n)
// Space: O(n)
