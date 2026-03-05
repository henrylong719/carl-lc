function maxDepth(s: string): number {
  const stack = [];
  let max = 0;

  for (const char of s) {
    if (char === '(') {
      stack.push('(');
      max = Math.max(stack.length, max);
      continue;
    }

    if (char === ')') {
      stack.pop();
    }
  }

  return max;
}

// Time: O(n)
// Space: O(n)
