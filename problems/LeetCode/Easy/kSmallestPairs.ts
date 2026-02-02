function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number,
): number[][] {
  const m = nums1.length;
  const n = nums2.length;

  if (m === 0 || n === 0 || k === 0) return [];

  const pq = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });

  const id = (i: number, j: number) => i * n + j;

  const visited = new Set();

  pq.enqueue([nums1[0] + nums2[0], 0, 0]);

  visited.add(id(0, 0));

  const res = [];

  while (!pq.isEmpty() && res.length < k) {
    const [_, i, j] = pq.dequeue() as any;
    res.push([nums1[i], nums2[j]]);

    if (i + 1 < m && !visited.has(id(i + 1, j))) {
      pq.enqueue([nums1[i + 1] + nums2[j], i + 1, j]);
      visited.add(id(i + 1, j));
    }

    if (j + 1 < n && !visited.has(id(i, j + 1))) {
      pq.enqueue([nums1[i] + nums2[j + 1], i, j + 1]);
      visited.add(id(i, j + 1));
    }
  }

  return res;
}

// t = min(k, m*n)
// Time: tlog(t)
// Space: O(k) or O(min(k,m*n))
