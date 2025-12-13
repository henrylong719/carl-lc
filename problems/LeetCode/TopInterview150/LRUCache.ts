class LRUCache {
  capacity: number;
  map: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const value = this.map.get(key) as number;
    // move the key to the top
    this.shiftKeyToEnd(key, value);
    return value as number;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this.shiftKeyToEnd(key, value);
    } else {
      this.map.set(key, value);
    }

    if (this.map.size > this.capacity) {
      // evict the least recently used key
      const firstKey = this.map.keys().next().value as number;
      this.map.delete(firstKey);
    }
  }

  shiftKeyToEnd(key: number, value: number): void {
    this.map.delete(key);
    this.map.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
