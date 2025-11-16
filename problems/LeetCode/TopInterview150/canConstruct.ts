function canConstruct(ransomNote: string, magazine: string): boolean {
  let noteObj = {} as Record<string, number>;
  let magObj = {} as Record<string, number>;

  for (let char of ransomNote) {
    if (!noteObj.hasOwnProperty(char)) {
      noteObj[char] = 1;
    } else {
      noteObj[char]++;
    }
  }

  for (let char of magazine) {
    if (!magObj.hasOwnProperty(char)) {
      magObj[char] = 1;
    } else {
      magObj[char]++;
    }
  }

  for (let char of ransomNote) {
    if (!magObj.hasOwnProperty(char) || magObj[char] <= 0) {
      return false;
    }

    magObj[char]--;
  }

  return true;
}

// Time complexity: O(n)
// Space completiry: O(n)

function canConstruct2(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  for (let char of new Set(ransomNote)) {
    if (magazine.split(char).length - 1 < ransomNote.split(char).length - 1) {
      return false;
    }
  }

  return true;
}

canConstruct('a', 'b');
