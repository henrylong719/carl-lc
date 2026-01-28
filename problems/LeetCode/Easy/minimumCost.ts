function minimumCost(cost: number[]): number {
  cost.sort((a, b) => b - a);

  let minCost = 0;

  for (let i = 0; i < cost.length; i++) {
    if (i % 3 !== 2) minCost += cost[i];
  }

  return minCost;
}

// Time: O(nlogn)
// Space: O(1)
