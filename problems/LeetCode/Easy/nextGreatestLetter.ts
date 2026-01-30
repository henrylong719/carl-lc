function nextGreatestLetter(letters: string[], target: string): string {
  for (let i = target.charCodeAt(0) + 1; i <= 'z'.charCodeAt(0); i++) {
    const char = String.fromCharCode(i);
    if (letters.some((c) => c === char)) return char;
  }
  return letters[0];
}

// Time: O(26*n)
// Space: O(1)

function nextGreatestLetter(letters: string[], target: string): string {
  let l = 0;
  let r = letters.length;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    if (letters[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return letters[l % letters.length];
}

function nextGreatestLetter(letters: string[], target: string): string {
  let l = 0;
  let r = letters.length - 1;
  let res = letters[0];

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (letters[mid] > target) {
      res = letters[mid];
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
}

// Time: O(log(n))
// Space: O(1)
