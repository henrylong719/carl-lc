function removeStars(s: string): string {
  const stack: string[] = [];

  for (let char of s) {
    if (char === '*') {
      stack.pop();
      continue;
    }
    stack.push(char);
  }

  return stack.join('');
}

// Time: O(n)
// Space: O(n)
