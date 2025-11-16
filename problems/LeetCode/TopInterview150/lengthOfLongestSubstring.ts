function lengthOfLongestSubstring2(s: string): number {
  let ans = 0;
  let obj = {} as Record<string, number>;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    if (!obj.hasOwnProperty(s[windowEnd])) {
      ans = Math.max(ans, windowEnd - windowStart + 1);
    } else {
      // find repetition
      const idx = obj[s[windowEnd]] + 1;
      while (windowStart < idx) {
        delete obj[s[windowStart]];
        windowStart++;
      }
    }

    obj[s[windowEnd]] = windowEnd;
  }

  return ans;
}

function lengthOfLongestSubstring3(s: string): number {
  let ans = 0;
  let obj = {} as Record<string, number>;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    if (!obj.hasOwnProperty(s[windowEnd])) {
      obj[s[windowEnd]] = 1;
    } else {
      obj[s[windowEnd]]++;
    }

    while (obj[s[windowEnd]] > 1) {
      obj[s[windowStart]]--;
      windowStart++;
    }

    ans = Math.max(ans, windowEnd - windowStart + 1);
  }

  return ans;
}

// Time complexity: O(n)
// Space complexity: O(n)
