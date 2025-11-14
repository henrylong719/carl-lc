function isSubsequence(s: string, t: string): boolean {
  let idx = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[idx]) {
      idx++;
    }
  }

  return idx === s.length;
}

function isSubsequence2(s: string, t: string): boolean {
  let sp = 0;
  let tp = 0;

  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) {
      sp++;
    }
    tp++;
  }

  return sp === s.length;
}

// Time complexity: O(n)
// Space complexity: O(1)
