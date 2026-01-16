function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);

    const a = stones.pop()!;
    const b = stones.pop()!;

    const diff = a - b;
    if (diff !== 0) stones.push(diff);
  }

  return stones.pop() ?? 0;
}

// Time: O(n^2log(n))
// Space: O(1)
