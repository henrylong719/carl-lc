function carFleet(target: number, position: number[], speed: number[]): number {
  const sorted = position
    .map((p, i) => [p, speed[i]])
    .sort((a, b) => b[0] - a[0]);

  const stack: number[] = [];

  for (const [p, s] of sorted) {
    const t = (target - p) / s;
    if (stack.length > 0 && stack[stack.length - 1] >= t) {
      continue;
    }
    stack.push(t);
  }

  return stack.length;
}

// Time: O(nlog(n))
// Space: O(n)
