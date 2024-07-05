function stockmax(prices: number[]): number {
  let bestFuturePrice = 0;
  let profit = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    let cur = prices[i];

    if (cur > bestFuturePrice) {
      bestFuturePrice = cur;
    }

    profit += bestFuturePrice - cur;
  }

  return profit;
}

console.log(stockmax([1, 3, 1, 2]));
