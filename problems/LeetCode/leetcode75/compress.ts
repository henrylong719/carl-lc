function compress(chars: string[]): number {
  if (!chars.length) return 0;

  let idx = 0;
  let ansStr = '';

  while (idx < chars.length) {
    let head = chars[idx];
    let count = 1;

    while (idx + count < chars.length && chars[idx + count] === head) {
      count++;
    }

    ansStr += count > 1 ? head + String(count) : head;
    idx += count;
  }

  for (let i = 0; i < chars.length; i++) {
    chars[i] = ansStr[i];
  }

  return ansStr.length;
}

// Time: O(n)
// Space: O(n)

function compress2(chars: string[]): number {
  let read = 0;
  let write = 0;

  while (read < chars.length) {
    const ch = chars[read];
    let start = read;

    while (read < chars.length && chars[read] === ch) read++;

    chars[write++] = ch;

    const count = read - start;

    if (count > 1) {
      const s = String(count);
      for (let i = 0; i < s.length; i++) {
        chars[write++] = s[i];
      }
    }
  }

  return write;
}

// Time: O(n)
// Space: O(1)
