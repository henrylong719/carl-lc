function isPrefixString(s: string, words: string[]): boolean {
  let i = 0;

  for (const word of words) {
    for (let j = 0; j < word.length; j++) {
      if (i === s.length || word[j] !== s[i]) return false;
      i++;
    }
    if (i === s.length) return true;
  }
  return false;
}

// Time: O(n)
// Space: O(1)
