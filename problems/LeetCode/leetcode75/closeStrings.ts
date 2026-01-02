function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const counter1 = new Array(26).fill(0);
  const counter2 = new Array(26).fill(0);

  const idx = (char: string) => {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  };

  const n = word1.length;

  for (let i = 0; i < n; i++) {
    const char1 = word1[i];
    const char2 = word2[i];

    counter1[idx(char1)]++;
    counter2[idx(char2)]++;
  }

  // make sure they have same key
  for (let i = 0; i < 26; i++) {
    if (counter1[i] > 0 && counter2[i] === 0) return false;
  }

  counter1.sort((a, b) => a - b);
  counter2.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (counter1[i] !== counter2[i]) return false;
  }

  return true;
}

// Time O(n + 26 log 26) ≈ O(n)
// Space O(26) ≈ O(1)

function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  for (let i = 0; i < word1.length; i++) {
    const c1 = word1[i];
    const c2 = word2[i];
    map1.set(c1, (map1.get(c1) ?? 0) + 1);
    map2.set(c2, (map2.get(c2) ?? 0) + 1);
  }

  // Same set of characters
  if (map1.size !== map2.size) return false;
  for (const k of map1.keys()) {
    if (!map2.has(k)) return false;
  }

  // Same multiset of frequencies
  const freq1 = Array.from(map1.values()).sort((a, b) => a - b);
  const freq2 = Array.from(map2.values()).sort((a, b) => a - b);

  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }
  return true;
}

// Time: O(n+ klogk) -> O(n)
// Space O(k) -> O(1)
