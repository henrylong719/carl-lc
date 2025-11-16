function reverseWords(s: string): string {
  let end = s.length - 1;
  let ans = '';

  while (end >= 0) {
    let wordEnd = end;

    while (wordEnd >= 0 && s[wordEnd] === ' ') {
      wordEnd--;
    }

    let wordStart = wordEnd;

    while (wordStart >= 0 && s[wordStart] !== ' ') {
      wordStart--;
    }

    const word = s.slice(wordStart + 1, wordEnd + 1);
    ans += word + ' ';

    end = wordStart;
  }

  return ans.trim();
}
