function countPoints(rings: string): number {
  const rods = Array.from({ length: 10 }, () => new Set());

  for (let i = 0; i < rings.length; i += 2) {
    const ring = rings[i];
    const rod = Number(rings[i + 1]);
    rods[rod].add(ring);
  }

  let count = 0;

  for (const set of rods) {
    if (set.size === 3) count++;
  }

  return count;
}

// Time: O(n)
// Space: O(n) -> O(10 * 3) -> O(1)

function countPoints(rings: string): number {
  // using bit
  // R 1: 001, B 2: 010, G 4: 100

  const mask = new Array<number>(10).fill(0);

  for (let i = 0; i < rings.length; i += 2) {
    const c = rings[i];
    const rod = rings[i + 1].charCodeAt(0) - '0'.charCodeAt(0);

    let bit = 0;

    if (c === 'R') {
      bit = 1;
    } else if (c === 'B') {
      bit = 2;
    } else {
      bit = 4;
    }

    mask[rod] |= bit;
  }

  let count = 0;

  for (let r = 0; r < 10; r++) {
    if (mask[r] === 7) {
      count++;
    }
  }

  return count;
}

// Time: O(n)
// Space: O(1)
