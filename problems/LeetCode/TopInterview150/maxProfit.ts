function maxProfit(prices: number[]): number {
  if (prices.length === 0) return 0;

  let lowest = prices[0];
  let best = 0;

  for (let price of prices) {
    if (price < lowest) {
      lowest = price;
      continue;
    }
    best = Math.max(best, price - lowest);
  }

  return best;
}
