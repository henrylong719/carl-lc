class MyStack {
  private q1: number[] = [];
  private q2: number[] = [];

  // O(n)
  push(x: number): void {
    this.q2.push(x);

    while (this.q1.length) {
      this.q2.push(this.q1.shift()!);
    }

    [this.q1, this.q2] = [this.q2, this.q1];
  }

  // O(1)
  pop(): number {
    return this.q1.shift()!;
  }

  // O(1)
  top(): number {
    return this.q1[0];
  }

  // O(1)
  empty(): boolean {
    return this.q1.length === 0;
  }
}

class MyStack {
  private q: number[] = [];

  // O(n)
  push(x: number): void {
    this.q.push(x);

    // rotate everything before x to the back
    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift()!);
    }
  }

  // O(1)
  pop(): number {
    return this.q.shift()!;
  }

  // O(1)
  top(): number {
    return this.q[0];
  }

  // O(1)
  empty(): boolean {
    return this.q.length === 0;
  }
}
