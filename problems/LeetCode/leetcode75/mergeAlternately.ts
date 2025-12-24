function mergeAlternately(word1: string, word2: string): string {
  if (!word1) return word2;
  if (!word2) return word1;

  let arr = new Array(word1.length + word2.length);
  let ptr = 0;

  for (let i = 0; i < word1.length; i++) {
    arr[ptr] = word1[i];
    ptr += 2;
  }

  ptr = 1;

  for (let i = 0; i < word2.length; i++) {
    arr[ptr] = word2[i];
    ptr += 2;
  }

  return arr.join('');
}

function mergeAlternately(word1: string, word2: string): string {
  if (!word1 || !word2) return word1 || word2;

  const merged = [];

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) {
      merged.push(word1[i]);
    }

    if (i < word2.length) {
      merged.push(word2[i]);
    }
  }

  return merged.join('');
}

// Time O(m+n)
// Space O(m+n)
