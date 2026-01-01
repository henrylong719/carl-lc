class MyQueue {
  private input: number[] = [];
  private output: number[] = [];

  push(x: number): void {
    this.input.push(x);
  }

  pop(): number {
    this.peek();
    return this.output.pop();
  }

  // Peek()
  // Amortized O(1), worst-case O(n)
  // If output is empty, you move all elements from input to output (that’s O(n)), otherwise it’s O(1).
  // Across a sequence of operations, each element is moved at most once from input to output,
  // so average cost is O(1).

  peek(): number {
    if (!this.output.length) {
      while (this.input.length) {
        this.output.push(this.input.pop());
      }
    }
    return this.output[this.output.length - 1];
  }

  empty(): boolean {
    return !this.input.length && !this.output.length;
  }
}
