/*
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 *
 */
function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  let maxLength = 1;
  let windowStart = 0;
  let obj = {} as any;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];

    if (!obj[rightChar]) {
      obj[rightChar] = 0;
    }

    obj[rightChar] += 1;

    while (obj[rightChar] > 1) {
      let leftChar = s[windowStart];

      obj[leftChar] -= 1;
      if (obj[leftChar] === 0) {
        delete obj[leftChar];
      }

      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('au'));
