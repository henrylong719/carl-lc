function groupAnagrams(strs: string[]): string[][] {
  const ans = [];
  const record = new Array(strs.length).fill(true);

  for (let i = 0; i < strs.length; i++) {
    if (record[i] === false) {
      continue;
    }
    const arr = [strs[i]];
    for (let j = i + 1; j < strs.length; j++) {
      if (isAnagram(strs[i], strs[j])) {
        arr.push(strs[j]);
        record[j] = false;
      }
    }
    ans.push(arr);
  }
  return ans;
}

function isAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const need: Record<string, number> = {};

  for (let char of str1) {
    need[char] = (need[char] ?? 0) + 1;
  }

  for (let char of str2) {
    if (!(char in need) || need[char] <= 0) {
      return false;
    }

    need[char]--;
  }

  return true;
}

// Time complexity: O(n^2 * m)
// Space complexity: O(m+n)

function groupAnagrams2(strs: string[]): string[][] {
  let ans: Record<string, string[]> = {};

  for (let str of strs) {
    const sorted = str.split('').sort().join('');

    if (!ans.hasOwnProperty(sorted)) {
      ans[sorted] = [];
    }
    ans[sorted].push(str);
  }

  return Object.values(ans);
}

// Time complexity: O(n*log(n))
// Space complexity: O(m*n)

function groupAnagrams3(strs: string[]): string[][] {
  let ans: Record<string, string[]> = {};

  for (let str of strs) {
    const count = new Array(26).fill(0);

    for (let char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    const key = count.join('#');

    /*

	[1, 11] → "111"
	[11, 1] → "111"

	[1, 11] → "1#11"
	[11, 1] → "11#1"

	*/

    if (!ans.hasOwnProperty(key)) {
      ans[key] = [];
    }

    ans[key].push(str);
  }
  return Object.values(ans);
}

// Time complexity: O(m*n)
// Space complexity: O(m*n)
