function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let need: Record<string, number> = {};

  for (const char of s) {
    need[char] = (need[char] ?? 0) + 1;
  }

  for (const char of t) {
    if (!(char in need) || need[char] <= 0) {
      return false;
    }

    need[char]--;
  }

  return true;
}

function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // it's 26!!!!
  const count = new Array(26).fill(0);

  for (const char of s) {
    count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }

  for (const char of t) {
    if (count[char.charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
      return false;
    }
    count[char.charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
  }
  return true;
}

// Time complexity: O(m+n)
// Space complexity: O9n
