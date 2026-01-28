function findRelativeRanks(score: number[]): string[] {
  const sorted = [...score].sort((a, b) => b - a);

  const map = new Map<number, number>();

  for (let i = 0; i < sorted.length; i++) {
    map.set(sorted[i], i);
  }

  const res = new Array(score.length).fill('');

  for (let i = 0; i < score.length; i++) {
    const s = score[i];

    if (s === sorted[0]) {
      res[i] = 'Gold Medal';
    } else if (s === sorted[1]) {
      res[i] = 'Silver Medal';
    } else if (s === sorted[2]) {
      res[i] = 'Bronze Medal';
    } else {
      res[i] = String(map.get(score[i]) + 1);
    }
  }
  return res;
}

function findRelativeRanks(score: number[]): string[] {
  const sorted = [...score].sort((a, b) => b - a);

  const bucket = new Array(sorted[0] + 1);

  for (let i = 0; i < sorted.length; i++) {
    bucket[sorted[i]] = i + 1;
  }

  const res: string[] = [];

  for (let i = 0; i < score.length; i++) {
    const s = score[i];

    const rank = bucket[s];

    if (rank === 1) {
      res.push('Gold Medal');
    } else if (rank === 2) {
      res.push('Silver Medal');
    } else if (rank === 3) {
      res.push('Bronze Medal');
    } else {
      res.push(String(rank));
    }
  }

  return res;
}

// Time: O(nlogn)
// Space: O(N)
