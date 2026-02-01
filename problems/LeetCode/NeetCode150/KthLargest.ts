class KthLargest {
  private pq: MinPriorityQueue<number>;
  private k: number;

  // Time: mlog(k) m = nums.length
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.pq = new MinPriorityQueue();
    for (const n of nums) this.add(n);
  }

  // Time: log(k)
  add(val: number): number {
    if (this.pq.size() < this.k) {
      this.pq.enqueue(val);
    } else if (this.pq.front() < val) {
      this.pq.dequeue();
      this.pq.enqueue(val);
    }
    return this.pq.front();
  }
}
