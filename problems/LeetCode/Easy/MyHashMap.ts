class Node {
  key: number = -1;
  value: number = -1;
  next: Node = null;

  constructor(key: number = -1, value: number = -1, next: Node = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class MyHashMap {
  private map: Node[];

  constructor() {
    this.map = new Array(10_000).fill(null).map(() => new Node());
  }

  // average O(1), O(n) worse case
  put(key: number, value: number): void {
    const hashedKey = this.hash(key);

    let cur = this.map[hashedKey];

    while (cur.next) {
      if (cur.next.key === key) {
        cur.next.value = value;
        return;
      }
      cur = cur.next;
    }

    cur.next = new Node(key, value);
  }

  // average O(1), O(n) worse case
  get(key: number): number {
    const hashedKey = this.hash(key);
    let cur = this.map[hashedKey];

    while (cur.next) {
      if (cur.next.key === key) {
        return cur.next.value;
      }
      cur = cur.next;
    }

    return -1;
  }

  // average O(1), O(n) worse case
  remove(key: number): void {
    const hashedKey = this.hash(key);
    let cur = this.map[hashedKey];

    while (cur.next) {
      if (cur.next.key === key) {
        cur.next = cur.next.next;
        return;
      }
      cur = cur.next;
    }
  }

  hash(key: number): number {
    return key % this.map.length;
  }
}

// Space: O(m+n)
// m: number of bucket
// n: number of unique key
