function kWeakestRows(mat: number[][], k: number): number[] {
  const lowerBound = (arr: number[]) => {
    let l = 0;
    let r = arr.length - 1;
    let res = arr.length;

    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid] === 0) {
        r = mid - 1;
        res = mid;
      } else if (arr[mid] > 0) {
        l = mid + 1;
      }
    }
    return res;
  };

  const soldiers: Array<[number, number]> = [];
  const rows = mat.length;

  for (let i = 0; i < rows; i++) {
    const num = lowerBound(mat[i]);
    soldiers.push([num, i]);
  }

  soldiers.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let res: number[] = [];
  for (let i = 0; i < k; i++) {
    res.push(soldiers[i][1]);
  }

  return res;
}

// Time: O(rlog(c)) + rlog(r) + n)
// Space: O(n)

function kWeakestRows(mat: number[][], k: number): number[] {
  const lowerBound = (arr: number[]) => {
    let l = 0;
    let r = arr.length - 1;
    let res = arr.length;

    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid] === 0) {
        r = mid - 1;
        res = mid;
      } else if (arr[mid] > 0) {
        l = mid + 1;
      }
    }
    return res;
  };

  const rows = mat.length;
  const pq = new MinPriorityQueue({
    compare: (a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      return a[0] - b[0];
    },
  });

  for (let i = 0; i < rows; i++) {
    const num = lowerBound(mat[i]);
    pq.enqueue([num, i]);
  }

  let res: number[] = [];
  for (let i = 0; i < k; i++) {
    res.push(pq.dequeue()[1]);
  }

  return res;
}

// Time: O(r(log(c) + log(r))  + k(log(r))
// Space: O(n)

function kWeakestRows(mat: number[][], k: number): number[] {
  const lowerBound = (arr: number[]) => {
    let l = 0;
    let r = arr.length - 1;
    let res = arr.length;

    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid] === 0) {
        r = mid - 1;
        res = mid;
      } else {
        l = mid + 1;
      }
    }
    return res;
  };

  const rows = mat.length;
  const pq = new MaxPriorityQueue({
    compare: (a, b) => {
      if (a[0] !== b[0]) return b[0] - a[0];
      return b[1] - a[1];
    },
  });

  for (let i = 0; i < rows; i++) {
    const soldiers = lowerBound(mat[i]);
    pq.enqueue([soldiers, i]);
    if (pq.size() > k) pq.dequeue();
  }

  let res: number[] = [];
  while (!pq.isEmpty()) {
    const [_, i] = pq.dequeue() as [number, number];
    res.push(i);
  }

  res.reverse();
  return res;
}

// Time: O(r * (log(c) + log(k)) + k)
