function reverseStr(s: string, k: number): string {
  if (k <= 1) return s;
  const arr = s.split('');

  for (let i = 0; i < arr.length; i += 2 * k) {
    let start = i;
    let end = Math.min(start + k - 1, arr.length - 1);
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  return arr.join('');
}

// Time: O(n)
// Space: O(n) array
