function longestPalindrome(s: string): string {
  let res = '';
  let resLen = 0;

  for (let i = 0; i < s.length; i++) {
    // odd length
    let l = i;
    let r = i;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        resLen = r - l + 1;
        res = s.slice(l, r + 1);
      }
      l--;
      r++;
    }

    // even length
    l = i;
    r = i + 1;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        resLen = r - l + 1;
        res = s.slice(l, r + 1);
      }
      l--;
      r++;
    }
  }

  return res;
}

// Time: O(n^2)
// Space: O(1)
