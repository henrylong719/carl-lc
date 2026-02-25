function reverseOnlyLetters(s: string): string {
  const isLetter = (c: string) => {
    if (typeof c !== 'string' || c.length !== 1) return false;
    return c.toUpperCase() !== c.toLowerCase();
  };

  let l = 0;
  let r = s.length - 1;
  const arr = s.split('');

  while (l < r) {
    while (!isLetter(arr[l]) && l < r) l++;
    while (!isLetter(arr[r]) && l < r) r--;
    if (l >= r) break;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }

  return arr.join('');
}

// Time: O(n)
// Space: O(n)
