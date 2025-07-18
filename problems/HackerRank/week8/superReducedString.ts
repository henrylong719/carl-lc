function superReducedString2(s: string): string {
  let str = sanitizeString(s);
  while (str !== s) {
    s = str;
    str = sanitizeString(s);
  }
  return str || 'Empty String';
}

function sanitizeString2(s: string): string {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] && s[i] === s[i + 1]) {
      i++;
      continue;
    }
    result += s[i];
  }
  return result;
}
