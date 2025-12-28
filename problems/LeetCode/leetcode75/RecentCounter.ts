class RecentCounter {
  private head: number = 0;
  private queue: number[] = [];

  ping(t: number): number {
    this.queue.push(t);

    const limit = t - 3000;

    while (this.queue[this.head] < limit) this.head++;

    // cleanup to prevent memory growth
    if (this.head > 1024 && this.head * 2 > this.queue.length) {
      this.queue = this.queue.slice(this.head);
      this.head = 0;
    }

    return this.queue.length - this.head;
  }
}

// Time
// per pint(t): amortized O(1)
// Across N pings, O(N) total work

// Space
// O(N)
