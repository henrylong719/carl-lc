function clearDigits(s: string): string {
  const stack = [];
  const set = new Set('0123456789');

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (!set.has(ch)) {
      stack.push(ch);
      continue;
    }
    stack.pop();
  }
  return stack.join('');
}

// Time: O(n)
// Space: O(n)
