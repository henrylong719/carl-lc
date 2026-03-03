function finalPrices(prices: number[]): number[] {
  const res = [...prices];
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
      const j = stack.pop()!;
      res[j] = prices[j] - prices[i];
    }
    stack.push(i);
  }

  return res;
}

// Time: O(n)
// Space: O(n)
