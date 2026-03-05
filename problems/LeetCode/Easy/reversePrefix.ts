function reversePrefix(word: string, ch: string): string {
  const stack = [];

  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
    if (word[i] === ch) {
      return stack.reverse().join('') + word.slice(i + 1);
    }
  }
  return word;
}

// Time: O(n)
// Space: O(n)
