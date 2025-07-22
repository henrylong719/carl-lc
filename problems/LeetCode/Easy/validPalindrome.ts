function validPalindrome(s: string): boolean {
  const isValid = (i: number, j: number) => {
    while (i < j) {
      if (s[i] === s[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  };

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else {
      const lValid = isValid(l + 1, r);
      const rValid = isValid(l, r - 1);
      return lValid || rValid;
    }
  }

  return true;
}
