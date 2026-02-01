class StockSpanner {
  private stack: Array<[number, number]>; // [price, span]

  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let span = 1;

    while (
      this.stack.length > 0 &&
      this.stack[this.stack.length - 1][0] <= price
    ) {
      span += this.stack.pop()![1];
    }

    this.stack.push([price, span]);
    return span;
  }
}

// Time: amortized O(1) per next() (each element pushed once, popped once)
// Space: O(n) worst case (strictly decreasing prices)
