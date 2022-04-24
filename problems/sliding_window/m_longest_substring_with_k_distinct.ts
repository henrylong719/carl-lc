/**
 *  Given a string, find the length of the longest substring in it with no more than K distinct characters.
 *
 *  Input: String="araaci", K=2
 *  Output: 4
 *  Explanation: The longest substring with no more than '2' distinct characters is "araa".
 *
 *  Input: String="araaci", K=1
 *  Output: 2
 *  Explanation: The longest substring with no more than '1' distinct characters is "aa".
 *
 *  Input: String="cbbebi", K=3
 *  Output: 5
 *  Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 *
 *  Input: String="cbbebi", K=10
 *  Output: 6
 *  Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".
 *
 **/

export const longest_substring_with_k_distinct = function (
  str: string,
  k: number
): number {
  // Input: String="araaci", K=2
  // Output: 4

  let maxLength = 0;
  let windowStart = 0;
  let counterObj = {} as any;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (!(rightChar in counterObj)) {
      counterObj[rightChar] = 0;
    }

    counterObj[rightChar] += 1;

    while (Object.keys(counterObj).length > k) {
      let leftChar = str[windowStart];

      counterObj[leftChar] -= 1;

      if (counterObj[leftChar] === 0) {
        delete counterObj[leftChar];
      }
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

const str = 'araaci';
const j = 2;

console.log(longest_substring_with_k_distinct(str, j));
