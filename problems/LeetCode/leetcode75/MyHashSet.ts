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
