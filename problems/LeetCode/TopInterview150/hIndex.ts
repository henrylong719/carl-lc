function hIndex(citations: number[]): number {
  const sortedCitations = citations.sort((a, b) => b - a);

  let l = 0;
  let r = sortedCitations.length - 1;
  let ans = 0;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const curr = sortedCitations[mid];

    // number of citations greater than current
    const num = mid + 1;

    if (curr >= num) {
      ans = num;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return ans;
}
