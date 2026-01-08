function minCostToMoveChips(position: number[]): number {
  // count the number of elements in even positions
  // count the number of elemnts in odd positions
  let even = 0;
  let odd = 0;

  for (let num of position) {
    if (num % 2 === 0) {
      even++;
      continue;
    }
    odd++;
  }

  return Math.min(even, odd);
}

// Time: O(n)
// Space: O(1)
