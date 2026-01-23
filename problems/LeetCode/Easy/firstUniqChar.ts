function firstUniqChar(s: string): number {
  const counter = new Array(26).fill(0);

  for (const char of s) {
    const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
    counter[idx]++;
  }

  for (let i = 0; i < s.length; i++) {
    const idx = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if (counter[idx] === 1) return i;
  }
  return -1;
}

function firstUniqChar2(s: string): number {
  const counter: Record<string, number> = {};

  for (const char of s) {
    if (!counter.hasOwnProperty(char)) counter[char] = 0;
    counter[char]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (counter[s[i]] === 1) return i;
  }

  return -1;
}

// Time: O(n)
// Space: O(1)
