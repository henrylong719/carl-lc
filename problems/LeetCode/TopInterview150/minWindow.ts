function minWindow(s: string, t: string): string {
  if (s.length < t.length) return '';
  if (s === t) return s;

  let obj = {} as Record<string, number>;

  // record the frequency of each letter in t

  for (let char of t) {
    if (!(char in obj)) {
      obj[char] = 1;
      continue;
    }
    obj[char]++;
  }

  let windowStart = 0;
  let ans = s + t;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const char = s[windowEnd];

    if (char in obj) {
      obj[char]--;

      while (!withPosValue(obj)) {
        if (ans.length > windowEnd - windowStart + 1) {
          ans = s.slice(windowStart, windowEnd + 1);
        }

        if (s[windowStart] in obj) {
          obj[s[windowStart]]++;
        }
        windowStart++;
      }
    }
  }

  return ans === s + t ? '' : ans;
}

function withPosValue(obj: Record<string, number>) {
  for (const key in obj) {
    if (obj[key] > 0) {
      return true;
    }
  }
  return false;
}

// Time complexity: O(n^2)
// Space complexity: O(n)

function minWindow2(s: string, t: string): string {
  if (s.length < t.length) return '';

  let need: Record<string, number> = {};

  for (const char of t) {
    need[char] = (need[char] ?? 0) + 1;
  }

  let windowStart = 0;
  let bestStart = 0;
  let bestLen = Infinity;
  let needCount = t.length;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const char = s[windowEnd];

    if (char in need) {
      if (need[char] > 0) {
        needCount--;
      }
      need[char]--;
    }

    while (needCount === 0) {
      const windowLen = windowEnd - windowStart + 1;
      if (windowLen < bestLen) {
        bestLen = windowLen;
        bestStart = windowStart;
      }

      let leftChar = s[windowStart];

      if (leftChar in need) {
        need[leftChar]++;
        if (need[leftChar] > 0) {
          needCount++;
        }
      }

      windowStart++;
    }
  }

  return bestLen === Infinity ? '' : s.slice(bestStart, bestStart + bestLen);
}

// Time complexity: O(m+n)
// Space complexity: O(n)
