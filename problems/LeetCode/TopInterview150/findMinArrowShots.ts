function findMinArrowShots(points: number[][]): number {
  // Sort

  const sorted = points.sort((a, b) => a[0] - b[0]);

  const ans = [sorted[0]];

  for (let i = 0; i < sorted.length; i++) {
    const prev = ans[ans.length - 1];
    const interval = sorted[i];

    if (interval[0] <= prev[1]) {
      prev[0] = Math.max(prev[0], interval[0]);
      prev[1] = Math.min(prev[1], interval[1]);
      continue;
    }

    ans.push(interval);
  }

  return ans.length;
}

// Time complexity: O(nlog(n))
// Space complexity: O(n)
