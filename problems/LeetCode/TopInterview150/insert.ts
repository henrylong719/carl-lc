function insert(intervals: number[][], newInterval: number[]): number[][] {
  const sorted = [...intervals, newInterval].sort((a, b) => a[0] - b[0]);

  const merged = [sorted[0]];

  for (let i = 0; i < sorted.length; i++) {
    const prev = merged[merged.length - 1];

    const interval = sorted[i];

    if (interval[0] <= prev[1]) {
      if (interval[1] > prev[1]) {
        prev[1] = interval[1];
      }
      continue;
    }
    merged.push(interval);
  }

  return merged;
}

function insert2(intervals: number[][], newInterval: number[]): number[][] {
  const ans = [];
  let i = 0;
  let n = intervals.length;

  while (i < n && intervals[i][1] < newInterval[0]) {
    ans.push(intervals[i]);
    i++;
  }

  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  ans.push(newInterval);
  ans.push(...intervals.slice(i));

  return ans;
}
