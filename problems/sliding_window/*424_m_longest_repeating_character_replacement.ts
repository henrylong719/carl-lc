/*
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 *
 *
 */

function characterReplacement(s: string, k: number): number {
  let windowStart = 0;
  let maxRepeatLetterCount = 0;
  let frequencyMap = {} as any;
  let maxLength = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];

    if (!frequencyMap[rightChar]) {
      frequencyMap[rightChar] = 0;
    }

    frequencyMap[rightChar] += 1;

    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      frequencyMap[rightChar]
    );

    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      const leftChar = s[windowStart];
      frequencyMap[leftChar]--;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}
