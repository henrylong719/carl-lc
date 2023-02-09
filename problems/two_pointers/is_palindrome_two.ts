export function isPalindromeTwo(s: string) {
  // use to ignore one character in the string
  let skip = 1;
  let left = 0;
  let right = s.length - 1;

  // use two pointers to scan the string
  while (left < right) {
    // moving the pointer if they are equal
    if (s[left] === s[right]) {
      left++;
      right--;
      continue;
    }

    // use skip to skip a character
    if (skip > 0) {
      if (s[left + 1] === s[right]) {
        left++;
      } else if (s[left] === s[right - 1]) {
        right--;
      }
      skip--;
      continue;
    }

    // finish loop the string and it is not palindrome after skipping one character
    return false;
  }

  // finish loop the string and it is palindrome after skipping one character
  return true;
}

console.log(isPalindromeTwo('eeccccbebaeeabebccceea'));
