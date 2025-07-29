function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) return false;

  let i = 0;
  let j = 0;

  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i < s.length ? false : true;
}

function isSubsequenceRec(s: string, t: string, m: number, n: number): boolean {
  if (m === 0) {
    return true;
  }

  if (n === 0) {
    return false;
  }

  if (s[m - 1] === t[n - 1]) {
    return isSubsequenceRec(s, t, m - 1, n - 1);
  }

  return isSubsequenceRec(s, t, m, n - 1);
}

function isSubsequence2(s: string, t: string): boolean {
  return isSubsequenceRec(s, t, s.length, t.length);
}
