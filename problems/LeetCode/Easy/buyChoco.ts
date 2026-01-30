function buyChoco(prices: number[], money: number): number {
  let min1 = Infinity;
  let min2 = Infinity;

  for (const price of prices) {
    if (price < min1) {
      min2 = min1;
      min1 = price;
    } else if (price < min2) {
      min2 = price;
    }
  }

  const sum = min1 + min2;
  if (sum > money) return money;
  return money - sum;
}

// Time: O(n)
// Space: O(1)
