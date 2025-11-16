function strStr(haystack: string, needle: string): number {
  let ans = -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      ans = i;

      for (let j = 0; j < needle.length; j++) {
        if (!haystack[i + j] || haystack[i + j] !== needle[j]) {
          ans = -1;
          break;
        }
      }

      if (ans !== -1) {
        return ans;
      }
    }
  }
  return ans;
}

// O(m*n)
