function kClosest(points: number[][], k: number): number[][] {
  const distances: number[][] = [];

  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const dist = Math.sqrt(p[0] * p[0] + p[1] * p[1]);
    distances.push([i, dist]);
  }

  distances.sort((a, b) => a[1] - b[1]);

  const res: number[][] = [];

  for (let i = 0; i < k; i++) {
    const idx = distances[i][0];
    res.push(points[idx]);
  }

  return res;
}

function kClosest(points: number[][], k: number): number[][] {
  points.sort(
    (a, b) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]),
  );
  return points.slice(0, k);
}

// Time: O(nlogn)
// Space: O(n)
