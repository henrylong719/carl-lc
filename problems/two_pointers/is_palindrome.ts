export function isPalindrome(s: string) {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    let leftChar = s[left];
    let rightChat = s[right];

    if (leftChar === rightChat) {
      left++;
      right--;
      continue;
    }
    return false;
  }

  return true;
}
