function merge(intervals: number[][]): number[][] {
  // Sort intervals in non descending order by their first index
  const sorted = intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    const prev = merged[merged.length - 1];

    // they can be merged
    if (interval[0] <= prev[1]) {
      if (interval[1] >= prev[1]) {
        prev[1] = interval[1];
      }
      continue;
    }
    merged.push(interval);
  }

  return merged;
}

// Time complexity: O(nlog(n)) sorting
// Space complexity:O(n)
