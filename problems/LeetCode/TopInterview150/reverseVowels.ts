function reverseVowels(s: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let l = 0;
  let r = s.length - 1;

  const arr = s.split('');

  while (l < r) {
    while (l < r && !vowels.has(arr[l])) l++;
    while (l < r && !vowels.has(arr[r])) r--;

    if (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return arr.join('');
}

// Time O(n)
// Space O(n)
