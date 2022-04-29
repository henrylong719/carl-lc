function findAnagrams(s: string, p: string): number[] {
  let windowStart = 0;
  let result: number[] = [];
  let frequencyObj = {} as any;
  let charCounter = 0;

  for (let i = 0; i < p.length; i++) {
    let char = p[i];

    if (!(char in frequencyObj)) {
      frequencyObj[char] = 0;
    }
    frequencyObj[char]++;
  }

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let charEnd = s[windowEnd];

    if (charEnd in frequencyObj) {
      frequencyObj[charEnd]--;

      if (frequencyObj[charEnd] === 0) {
        charCounter++;
      }
    }

    // find a anagrams, initialize everything
    if (charCounter === Object.keys(frequencyObj).length) {
      result.push(windowStart);
    }

    if (windowEnd - windowStart + 1 >= p.length) {
      let charStart = s[windowStart];
      windowStart++;

      if (charStart in frequencyObj) {
        if (frequencyObj[charStart] === 0) {
          charCounter--;
        }

        frequencyObj[charStart]++;
      }
    }
  }

  return result;
}

let s = 'abab';
let p = 'ab';

console.log(findAnagrams(s, p));
