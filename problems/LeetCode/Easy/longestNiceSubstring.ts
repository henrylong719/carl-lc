function longestNiceSubstring(s: string): string {
  const len = s.length;

  if (len < 2) {
    return '';
  }

  const chars = new Set(s);

  // look for the first "bad" char
  for (let i = 0; i < len; i++) {
    let char = s[i];

    const upper = char.toUpperCase();
    const lower = char.toLowerCase();

    if (!chars.has(upper) || !chars.has(lower)) {
      const left = longestNiceSubstring(s.slice(0, i));
      const right = longestNiceSubstring(s.slice(i + 1, len));

      return left.length >= right.length ? left : right;
    }
  }
  return s;
}
