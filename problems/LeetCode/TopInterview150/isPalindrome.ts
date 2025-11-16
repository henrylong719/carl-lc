function isPalindrome2(s: string): boolean {
  // clear non alphabets and numbers
  const alphaNumeric = s.replace(/[^0-9a-zA-Z]/g, '');

  let l = 0;
  let r = alphaNumeric.length - 1;

  while (l < r) {
    if (alphaNumeric[l].toLowerCase() !== alphaNumeric[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}
