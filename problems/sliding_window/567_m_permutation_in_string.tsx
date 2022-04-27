function checkInclusion(s1: string, s2: string): boolean {
  let windowStart = 0;
  let matchedLetter = 0;
  let frequencyMap = {} as any;

  // get the frequency of each letter in s1
  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];

    if (!frequencyMap[letter]) {
      frequencyMap[letter] = 0;
    }
    frequencyMap[letter]++;
  }

  // loop s2 to check if it contains a permutation of s1 using slide window

  for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
    const rightChar = s2[windowEnd];

    if (rightChar in frequencyMap) {
      frequencyMap[rightChar]--;

      if (frequencyMap[rightChar] === 0) {
        // find one matched letter
        matchedLetter++;
      }
    }

    // find all matched letters
    if (matchedLetter === Object.keys(frequencyMap).length) {
      return true;
    }
    console.log(windowEnd - windowStart + 1);

    // slide window
    if (windowEnd - windowStart + 1 >= s1.length) {
      let leftChar = s2[windowStart];

      // add the letter back
      if (leftChar in frequencyMap) {
        if (frequencyMap[leftChar] === 0) {
          matchedLetter--;
        }

        frequencyMap[leftChar]++;
      }
      windowStart++;
    }
  }

  return false;
}

console.log(checkInclusion('ab', 'eidboaoo'));
