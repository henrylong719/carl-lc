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
