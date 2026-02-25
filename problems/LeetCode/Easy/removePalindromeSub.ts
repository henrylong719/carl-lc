function removePalindromeSub(s: string): number {
  if (s.length === 0) return 0;

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l++] !== s[r--]) return 2;
  }

  return 1;
}

// Time: O(n)
// Space: O(1)
