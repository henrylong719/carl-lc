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

class DLLNode {
  key: number;
  value: number;
  prev: DLLNode | null = null;
  next: DLLNode | null = null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache2 {
  capacity: number;
  head: DLLNode;
  tail: DLLNode;
  map: Map<number, DLLNode>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new DLLNode(-1, -1);
    this.tail = new DLLNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this.moveToFront(node);
    return node.value;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this.moveToFront(node);
      return;
    }

    const newNode = new DLLNode(key, value);
    this.map.set(key, newNode);
    this.addToFront(newNode);

    if (this.map.size > this.capacity) {
      const lru = this.removeLRU();
      this.map.delete(lru.key);
    }
  }

  removeNode(node: DLLNode): void {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    node.prev = null;
    node.next = null;
  }

  addToFront(node: DLLNode): void {
    const first = this.head.next;
    node.prev = this.head;
    node.next = first;
    first.prev = node;
    this.head.next = node;
  }

  moveToFront(node: DLLNode): void {
    this.removeNode(node);
    this.addToFront(node);
  }

  removeLRU(): DLLNode {
    const lru = this.tail.prev;
    this.removeNode(lru);
    return lru;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
