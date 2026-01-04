function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (let i = 0; i < asteroids.length; i++) {
    const cur = asteroids[i];
    const last = stack[stack.length - 1];

    if (!stack.length || last < 0 || cur > 0) {
      stack.push(cur);
    } else if (-cur === last) {
      stack.pop();
    } else if (-cur > last) {
      stack.pop();
      i--;
    }
  }

  return stack;
}

// Time complexity: O(n) (amortized)
// Space: O(n)
