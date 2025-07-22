function longestPalindrome(s: string): number {
  if (s.length < 2) {
    return s.length;
  }

  let obj = {} as any;

  for (let char of s) {
    if (obj[char] !== undefined) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  let count = 0;

  for (let key in obj) {
    if (obj[key] % 2 == 0) {
      count += obj[key];
    } else if (obj[key] > 2) {
      let num = obj[key] - 1;
      count += num;
    }
  }

  return count < s.length ? count + 1 : count;
}

function longestPalindrome2(s: string): number {
  const odd = new Set();

  let length = 0;

  for (let char of s) {
    if (odd.has(char)) {
      odd.delete(char);
      length += 2;
    } else {
      odd.add(char);
    }
  }

  return odd.size > 0 ? length + 1 : length;
}

console.log(longestPalindrome('abccccdd'));
