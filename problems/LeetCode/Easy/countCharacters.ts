function countCharacters(words: string[], chars: string): number {
  const counter = new Array(26).fill(0);

  for (const char of chars) {
    const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
    counter[idx]++;
  }

  let sum = 0;

  for (const word of words) {
    const _counter = [...counter];
    let isGood = true;
    for (const char of word) {
      const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
      if (_counter[idx] > 0) {
        _counter[idx]--;
      } else {
        isGood = false;
        break;
      }
    }
    if (isGood) sum += word.length;
  }

  return sum;
}

// Time: O(C + S)
// C: length of chars
// S: total chars in the words

// Space: O(1)
// Counter: 26
