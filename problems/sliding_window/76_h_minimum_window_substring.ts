function minWindow(s: string, t: string): string {
  let minLength = s.length + 1;
  let windowStart = 0;
  let frequencyMap = {} as any;
  let letterCounter = 0;
  let startPosition = 0 as number;

  for (let i = 0; i < t.length; i++) {
    let char = t[i];

    if (!(char in frequencyMap)) {
      frequencyMap[char] = 0;
    }
    frequencyMap[char]++;
  }

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];

    if (rightChar in frequencyMap) {
      frequencyMap[rightChar]--;

      // find a matched letter
      if (frequencyMap[rightChar] >= 0) {
        letterCounter++;
      }
    }

    // find strings containing all t letters
    while (letterCounter === t.length) {
      // current window size smaller than recorded min length
      if (windowEnd - windowStart + 1 < minLength) {
        minLength = windowEnd - windowStart + 1;
        startPosition = windowStart;
      }

      let leftChar = s[windowStart];
      windowStart++;

      if (leftChar in frequencyMap) {
        frequencyMap[leftChar]++;
        if (frequencyMap[leftChar] > 0) {
          letterCounter--;
        }
      }
    }
  }

  if (minLength > s.length) return '';

  return s.substring(startPosition, startPosition + minLength);
}

console.log(minWindow('aabdec', 'abc'));
