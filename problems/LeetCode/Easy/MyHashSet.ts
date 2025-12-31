class MyHashSet {
  private set: (number | null)[] = [];

  add(key: number): void {
    if (this.set.indexOf(key) !== -1) return;
    this.set.push(key);
  }

  remove(key: number): void {
    const idx = this.set.indexOf(key);

    if (idx === -1) return;

    const n = this.set.length;

    for (let i = idx; i < n - 1; i++) {
      this.set[i] = this.set[i + 1];
    }

    this.set.pop();
  }

  contains(key: number): boolean {
    const idx = this.set.indexOf(key);
    if (idx === -1) return false;
    return true;
  }
}

class MyHashSet {
  // 1_000_001 here not 1_000_000 !!!
  private set = new Uint8Array(1_000_001);

  add(key: number): void {
    this.set[key] = 1;
  }

  remove(key: number): void {
    this.set[key] = 0;
  }

  contains(key: number): boolean {
    return this.set[key] === 1;
  }
}

class Node {
  key: number = -1;
  next: Node | null = null;

  constructor(key = -1, next = null) {
    this.key = key;
    this.next = next;
  }
}

class MyHashSet {
  private map = new Array(10_000).fill(null).map(() => new Node());

  // average O(1), O(n) worse case
  add(key: number): void {
    const hashedKey = this.hash(key);
    let cur = this.map[hashedKey];

    while (cur.next) {
      if (cur.next.key === key) return;
      cur = cur.next;
    }
    cur.next = new Node(key);
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

  // average O(1), O(n) worse case
  contains(key: number): boolean {
    const hashedKey = this.hash(key);
    let cur = this.map[hashedKey];

    while (cur.next) {
      if (cur.next.key === key) {
        return true;
      }
      cur = cur.next;
    }

    return false;
  }

  hash(key: number): number {
    return key % this.map.length;
  }
}

// Space: O(m+n)
// m: number of bucket
// n: number of unique key
