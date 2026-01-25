function minTimeToType(word: string): number {
  let prev = 'a';
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    count += minSeconds(prev, word[i]) + 1;
    prev = word[i];
  }
  return count;
}

function minSeconds(start: string, end: string) {
  const clockwise = Math.abs(end.charCodeAt(0) - start.charCodeAt(0));
  const counterClockwise = 26 - clockwise;
  return Math.min(clockwise, counterClockwise);
}

// Time: O(n)
// Space: O(1)
