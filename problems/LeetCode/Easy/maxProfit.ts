function maxProfit(prices: number[]): number {
  let lowest = prices[0];
  let best = 0;

  for (let i = 1; i <= prices.length; i++) {
    if (prices[i - 1] < lowest) lowest = prices[i - 1];

    best = Math.max(best, prices[i - 1] - lowest);
  }

  return best;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
