const find_string_anagrams = function (str: string, pattern: string) {
  let resultIndexes = [];
  let windowStart = 0;
  let letterCounter = 0;
  let frequencyMap = {} as any;

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if (!(char in frequencyMap)) {
      frequencyMap[char] = 0;
    }
    frequencyMap[char]++;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let charEnd = str[windowEnd];

    if (charEnd in frequencyMap) {
      frequencyMap[charEnd]--;

      if (frequencyMap[charEnd] === 0) {
        letterCounter++;
      }
    }

    console.log(frequencyMap);

    if (letterCounter === Object.keys(frequencyMap).length) {
      resultIndexes.push(windowStart);
    }

    if (windowEnd - windowStart + 1 >= pattern.length) {
      let charStart = str[windowStart];
      windowStart++;
      if (charStart in frequencyMap) {
        if (frequencyMap[charStart] === 0) {
          letterCounter--;
        }
        frequencyMap[charStart]++;
      }
    }
  }
  return resultIndexes;
};
let s = 'abab';
let p = 'ab';

console.log(find_string_anagrams('ppqp', 'pq'));
