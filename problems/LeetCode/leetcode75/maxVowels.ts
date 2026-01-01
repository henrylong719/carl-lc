function maxVowels(s: string, k: number): number {
  const vowelLetters = new Set(['a', 'e', 'i', 'o', 'u']);

  let start = 0;
  let max = 0;
  let vowels = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (vowelLetters.has(char)) vowels++;

    if (end - start === k - 1) {
      max = Math.max(max, vowels);
      if (vowelLetters.has(s[start])) vowels--;
      start++;
    }
  }

  return max;
}

// Time: O(n)
// Space: O(1)
