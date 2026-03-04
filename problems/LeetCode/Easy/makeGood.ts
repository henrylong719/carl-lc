function makeGood(s: string): string {
  const isCaseDiff = (a: string, b: string) => {
    return a !== b && a.toLowerCase() === b.toLowerCase();
  };

  const stack = [];

  for (const char of s) {
    if (stack.length !== 0 && isCaseDiff(stack[stack.length - 1], char)) {
      stack.pop();
      continue;
    }
    stack.push(char);
  }

  return stack.join('');
}

// Time: O(n)
// Space: O(n)
