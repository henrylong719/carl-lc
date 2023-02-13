/**
 *
 * "abcdbea"
 * "aba"
 * "abccabcabcc"
 * "aaaabaaa"
 * "bbbbb"
 *
 */

export function findLongestSubstring(inputString: string) {
  let max = 0;

  for (let i = 0; i < inputString.length; i++) {
    let substring = '';
    let windowSize = 0;

    while (!substring.includes(inputString[i + windowSize])) {
      substring += inputString[i + windowSize];
      windowSize++;

      if (substring.length > max && i + windowSize <= inputString.length) {
        max = substring.length;
      }
    }
  }

  return max;
}

export function findLongestSubstringUsingHashMap(inputString: string) {
  let max = 0;

  for (let i = 0; i < inputString.length; i++) {
    let substringMap = new Map();
    let windowSize = 0;

    while (!substringMap.has(inputString[i + windowSize])) {
      substringMap.set(inputString[i + windowSize], 1);

      windowSize++;

      if (substringMap.size > max && i + windowSize <= inputString.length) {
        max = substringMap.size;
      }
    }
  }

  return max;
}

findLongestSubstring('abcdbea');
