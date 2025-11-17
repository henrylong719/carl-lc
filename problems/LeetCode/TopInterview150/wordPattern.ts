function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  const patternObj: Record<string, number> = {};
  const wordsObj: Record<string, number> = {};

  for (let i = 0; i < pattern.length; i++) {
    // for test cases like "dog constructor constructor dog"
    // constructor will be a function

    if (!patternObj.hasOwnProperty(pattern[i])) {
      patternObj[pattern[i]] = i;
    }

    if (!wordsObj.hasOwnProperty(words[i])) {
      wordsObj[words[i]] = i;
    }

    console.log(wordsObj);
    console.log(patternObj);

    if (patternObj[pattern[i]] !== wordsObj[words[i]]) {
      return false;
    }
  }
  return true;
}

function wordPattern2(pattern: string, s: string): boolean {
  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  const patternObj = new Map<string, number>();
  const wordsObj = new Map<string, number>();

  for (let i = 0; i < pattern.length; i++) {
    // for test cases like "dog constructor constructor dog"
    // constructor will be a function

    if (!patternObj.has(pattern[i])) {
      patternObj.set(pattern[i], i);
    }

    if (!wordsObj.has(words[i])) {
      wordsObj.set(words[i], i);
    }

    if (patternObj.get(pattern[i]) !== wordsObj.get(words[i])) {
      return false;
    }
  }
  return true;
}

// Time complexity: O(k+m) = O(n) (split and for loop)
// Space complexity: O(k+m+n) = O(n) (split and objs)

function wordPattern1(pattern: string, s: string): boolean {
  const words = s.split(' ');

  if (words.length !== pattern.length) return false;

  const seen: Record<string, string> = {};

  for (let i = 0; i < pattern.length; i++) {
    const pattern_key = 'p_' + pattern[i];
    const words_key = 'w_' + words[i];

    if (seen.hasOwnProperty(pattern_key) && seen[pattern_key] !== words[i]) {
      return false;
    }

    if (seen.hasOwnProperty(words_key) && seen[words_key] !== pattern[i]) {
      return false;
    }

    seen[pattern_key] = words[i];
    seen[words_key] = pattern[i];
  }

  return true;
}

// Time complexity: O(k+m) = O(n) (split and for loop)
// Space complexity: O(k+m) = O(n) (split and obj)

console.log(wordPattern2('abba', 'dog constructor constructor dog'));
