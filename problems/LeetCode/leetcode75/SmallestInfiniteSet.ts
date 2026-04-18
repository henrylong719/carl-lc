class SmallestInfiniteSet {
  private current = 1;
  private pq = new MinPriorityQueue<number>();
  private inHeap = new Set<number>();

  // time O(log k)
  popSmallest(): number {
    if (!this.pq.isEmpty()) {
      const min = this.pq.dequeue();
      this.inHeap.delete(min);
      return min;
    }

    return this.current++;
  }

  // Time: O(log k)
  addBack(num: number): void {
    if (this.inHeap.has(num) || num >= this.current) return;
    this.inHeap.add(num);
    this.pq.enqueue(num);
  }
}

// space: O(k)

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
