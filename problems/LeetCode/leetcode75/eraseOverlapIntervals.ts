function eraseOverlapIntervals(intervals: number[][]): number {
  // Maximize how many intervals we can keep without overlapping
  intervals.sort((a, b) => a[1] - b[1]);
  let prevEnd = intervals[0][1];
  let res = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      res++;
      continue;
    }
    prevEnd = intervals[i][1];
  }

  return res;
}

// Time: O(nlog(n))
// Space: O(1) exclude sorting
