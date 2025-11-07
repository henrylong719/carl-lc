function lengthOfLastWord(s: string): number {
  const arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
}

function lengthOfLastWord2(s: string): number {
  let end = s.length - 1;

  while (end >= 0 && s[end] === ' ') {
    end--;
  }

  let start = end;

  while (start >= 0 && s[start] !== ' ') {
    start--;
  }

  return end - start;
}
