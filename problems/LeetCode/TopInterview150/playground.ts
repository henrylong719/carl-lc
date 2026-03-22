function reverseWords(s: string): string {
  let end = s.length - 1;
  let res = '';

  while (end >= 0) {
    let wordEnd = end;

    while (s[wordEnd] === ' ' && wordEnd >= 0) {
      wordEnd--;
    }

    let wordStart = wordEnd;

    while (s[wordStart] !== ' ' && wordStart >= 0) {
      wordStart--;
    }

    res += s.slice(wordStart + 1, wordEnd + 1) + ' ';

    end = wordStart;
  }

  return res.trim();
}
