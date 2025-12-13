

### 88. Merge Sorted Array (28/10)



```typescript
function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }

  nums1.sort((a, b) => a - b);
}
```



### 27. Remove Element (28/10)

```typescript
function removeElement(nums: number[], val: number): number {
  let nextElement = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[nextElement] = nums[i];
      nextElement++;
    }
  }
  return nextElement;
}

```



### 26. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) (29/10)

```typescript
function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0;

  let nextElement = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[nextElement - 1]) {
      nums[nextElement] = nums[i];
      nextElement++;
    }
  }

  return nextElement;
}

```



### [80. Remove Duplicates from Sorted Array II ](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)(30/10)

```typescript
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let cur = nums[0];
  let count = 1;
  let nextElement = 1;
  let LIMIT = 2;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === cur) {
        count++;
        if (count <= LIMIT) {
            nums[nextElement] = nums[i];
            nextElement++;
        } 
        continue;
    } 

    count = 1;
    cur = nums[i];
    nums[nextElement] = nums[i];
    nextElement++;
  }
  return nextElement;
}

```



```typescript
function removeDuplicates(nums: number[]): number {
  let nextElement = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[nextElement-2]) {
        nums[nextElement] = nums[i];
        nextElement++;
    }
  }

  return nextElement;
}
```


### [169. Majority Element](https://leetcode.com/problems/majority-element/) (31/Oct)

```typescript

function majorityElement(nums: number[]): number {

    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        (num === candidate)? count++ : count --;
    }
    return candidate;
};

```



```typescript
function majorityElement(nums: number[]): number {

    nums.sort((a,b)=>a-b);

    return nums[Math.floor(nums.length/2)];
};
```



### [189. Rotate Array](https://leetcode.com/problems/rotate-array/) (31/10)

```typescript
function rotate(nums: number[], k: number): void {
  let _k = k % nums.length;

  let arr = [...nums.slice(-_k), ...nums.slice(0, nums.length - _k)];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }
}

```



**Better approach**

```typescript

function reverse(nums: number[], l: number, r: number) {
    while (l < r) {
        let tmp = nums[l];
        nums[l] = nums[r];
        nums[r] = tmp;
        l++;
        r--;
    }
}

function rotate(nums: number[], k: number): void {

    let n = nums.length;
    if (n === 0) return;

    let _k = (k % n);
    if (_k === 0) return;

    reverse(nums, 0, n-1);
    reverse(nums, 0, _k-1);
    reverse(nums, _k, n-1)
};

```



### [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) (3/11)

```typescript

function maxProfit(prices: number[]): number {
    if (prices.length === 0) return 0;

    let lowest = prices[0];
    let best = 0;

    for (let price of prices){
        if (price < lowest) {
            lowest = price;
            continue;
        } 
        best = Math.max(best, price - lowest);
    }

    return best;
};

```

### [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) (3/11)

```typescript

function maxProfit(prices: number[]): number {
  let n = prices.length;

  if (n === 0) return 0;

  // dynamic programming

  let dp = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1];
    for (let j = i - 1; j >= 0; j--) {
      if (prices[i] > prices[j]) {
        const diff = prices[i] - prices[j];
        dp[i] = Math.max(dp[i], dp[j] + diff);
      }
    }
  }
  return dp[n - 1];
}


```



### [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/) (4/11)

```typescript

function romanToInt(s: string): number {
  const dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  } as Record<string, number>;

  let num = 0;

  for (let i = 0; i < s.length; i++) {
    if (!!s[i + 1] && dic[s[i + 1]] > dic[s[i]]) {
      num += dic[s[i + 1]] - dic[s[i]];
      i++;
      continue;
    }
    num += dic[s[i]];
  }

  return num;
}


// better solution

function romanToInt2(s: string): number {
  const dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  } as const;

  let total = 0;
  let prev = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let current = dic[s[i] as keyof typeof dic];
    total += current >= prev ? current : -current;
    prev = current;
  }
  return total;
}

```



### *[12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/) (7/11)

```typescript
function intToRoman2(num: number): string {
  const valueSymbols: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let res = '';

  for (let [value, symbol] of valueSymbols) {
    if (num === 0) break;

    const count = Math.floor(num / value);
    res += symbol.repeat(count);
    num -= value * count;
  }

  return res;
}

```



### [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/) (7/11)

```typescript

function lengthOfLastWord(s: string): number {
  const arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
}

function lengthOfLastWord2(s: string): number {
  let end = s.length - 1;

  while (end >= 0 && s[end] === ' ') {
    end--;
  }

  let start = end;

  while (start >= 0 && s[start] !== ' ') {
    start--;
  }

  return end - start;
}

```



### [*55. Jump Game](https://leetcode.com/problems/jump-game/) (10/11)

```typescript
function canJump(nums: number[]): boolean {
  let pos = nums.length - 1;
  let jump = true;

  while (pos !== 0 && jump) {
    jump = false;
    for (let i = pos - 1; i >= 0; i--) {
      if (nums[i] >= pos - i) {
        pos = i;
        jump = true;
      }
    }
  }
   return pos === 0;
}

function canJump(nums: number[]): boolean {

    let goal = nums.length-1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= goal) {
            goal = i;
        }
    }

    return goal === 0;
};

// Time complexity: O(n)
// Space complexity: O(1)

```



### [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/) (10/11)

```typescript

function jump(nums: number[]): number {
  let pos = nums.length - 1;

  let steps = 0;

  while (pos !== 0) {
    let maxPos = pos;

    for (let i = pos - 1; i >= 0; i--) {
      if (nums[i] >= pos - i) {
        maxPos = i;
      }
    }

    pos = maxPos;
    steps++;
  }

  return steps;
}

```



### [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) (10/11)

```typescript
function longestCommonPrefix(strs: string[]): string {
  let ans = '';

  for (let i = 0; i < strs[0].length; i++) {
    let isCommon = true;
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (!strs[j][i] || strs[j][i] !== char) {
        isCommon = false;
        return ans;
      }
    }

    if (isCommon) {
      ans += char;
    }
  }

  return ans;
}

```



### [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) (10/11)

```typescript

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

```



### [274. H-Index](https://leetcode.com/problems/h-index/) (11/11)

```typescript

function hIndex(citations: number[]): number {
  const sortedCitations = citations.sort((a, b) => b - a);

  let l = 0;
  let r = sortedCitations.length - 1;
  let ans = 0;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const curr = sortedCitations[mid];

    // number of citations greater than current
    const num = mid + 1;

    if (curr >= num) {
      ans = num;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return ans;
}

```



### [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) (11/11)

```typescript
function strStr(haystack: string, needle: string): number {
  let ans = -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      ans = i;

      for (let j = 0; j < needle.length; j++) {
        if (!haystack[i + j] || haystack[i + j] !== needle[j]) {
          ans = -1;
          break;
        }
      }

      if (ans !== -1) {
        return ans;
      }
    }
  }
  return ans;
}

// O(m*n)

```



### ***[6. Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/)

```typescript
function convert(s: string, numRows: number): string {
  // make sure numRows === 1
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const rows: string[] = new Array(numRows).fill('');

  let idx = 0;
  // down: 1, up: -1
  let d = 1;

  for (let char of s) {
    rows[idx] += char;

    if (idx === 0) {
      d = 1;
    } else if (idx === numRows - 1) {
      d = -1;
    }

    idx += d;
  }

  return rows.join('');
}

```







### [*238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) (12/11)

```typescript

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const prefix = new Array(n).fill(1);
  const surfix = new Array(n).fill(1);

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    surfix[j] = surfix[j + 1] * nums[j + 1];
  }

  const ans = new Array(n).fill(1);

  for (let k = 0; k < nums.length; k++) {
    ans[k] = prefix[k] * surfix[k];
  }

  return ans;
}

// Time complexity: O(n)
// Space complexity: O(n)

function productExceptSelf2(nums: number[]): number[] {
  const n = nums.length;

  let ans = new Array(n).fill(1);

  // create prefix
  let cur = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = ans[i] * cur;
    cur = cur * nums[i];
  }

  // multiply prefix ans suffix
  cur = 1;
  for (let j = n - 1; j >= 0; j--) {
    ans[j] = ans[j] * cur;
    cur = cur * nums[j];
  }

  return ans;
}

// Time complexity: O(n)
// Space complexity: O(1) (exclude output array)

console.log(productExceptSelf([1, 2, 3, 4]));


```





### *[125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) (13/11)

```typescript
function isPalindrome2(s: string): boolean {
  // clear non alphabets and numbers
  const alphaNumeric = s.replace(/[^0-9a-zA-Z]/g, '');

  let l = 0;
  let r = alphaNumeric.length - 1;

  while (l < r) {
    if (alphaNumeric[l].toLowerCase() !== alphaNumeric[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

```



### *** [134. Gas Station](https://leetcode.com/problems/gas-station/) (13/11)

`Hint:`

if you start from station `a` and stuck at `b`, then you can't get to `b` from any station between `a` and `b`.

```typescript

function canCompleteCircuit(gas: number[], cost: number[]): number {
  // make sure solution exists
  if (
    gas.reduce((acc, cur) => (acc += cur)) <
    cost.reduce((acc, cur) => (acc += cur))
  ) {
    return -1;
  }

  let start = 0;
  let currentGas = 0;

  // If you start from station A and stuck at B, then you can't get to B from
  // any station between A and B.
  for (let i = 0; i < gas.length; i++) {
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }

  return start;
}

```





### [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/) (14/11)

```typescript

function isSubsequence(s: string, t: string): boolean {

    let sp = 0;
    let tp =0;

    while (sp < s.length && tp < t.length) {
        if (s[sp] === t[tp]) {
            sp++;
        }
        tp++;
    } 

    return sp === s.length;
};

function isSubsequenceRec(s: string, t: string, m: number, n: number): boolean {
  if (m === 0) {
    return true;
  }

  if (n === 0) {
    return false;
  }

  if (s[m - 1] === t[n - 1]) {
    return isSubsequenceRec(s, t, m - 1, n - 1);
  }

  return isSubsequenceRec(s, t, m, n - 1);
}

function isSubsequence2(s: string, t: string): boolean {
  return isSubsequenceRec(s, t, s.length, t.length);
}

```





### [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) (14/11)

```typescript

function twoSum(numbers: number[], target: number): number[] {
  let pl = 0;
  let pr = numbers.length - 1;

  while (pl < pr) {
    if (numbers[pl] + numbers[pr] === target) {
      return [pl + 1, pr + 1];
    }

    if (numbers[pl] + numbers[pr] < target) {
      pl++;
    } else {
      pr--;
    }
  }
  return [];
}

// Time complexity: O(n)
// Space complexity: O(1)

```







### [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/) (14/11)

```typescript

function maxArea(height: number[]): number {
  let ans = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    ans = Math.max(ans, area);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return ans;
}

// Time complexity: O(n)
// Space complexity: O(1)

```





### **[15. 3Sum ](https://leetcode.com/problems/3sum/)(14/11)

```typescript
function threeSum(nums: number[]): number[][] {
  let sorted = nums.sort((a, b) => a - b);
  let ans = [] as number[][];

  for (let i = 0; i < sorted.length; i++) {
    // Remove duplicates
    if (i !== 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }
    twoSum(sorted, i + 1, -sorted[i], ans);
  }

  return ans;
}

function twoSum(
  sorted: number[],
  left: number,
  target: number,
  ans: number[][]
) {
  let right = sorted.length - 1;

  while (left < right) {
    if (sorted[left] + sorted[right] === target) {
      ans.push([-target, sorted[left], sorted[right]]);
      left++;
      right--;

      // Remove duplicates
      while (left < right && sorted[left] === sorted[left - 1]) {
        left++;
      }

      while (left < right && sorted[right] === sorted[right + 1]) {
        right--;
      }
    } else if (sorted[left] + sorted[right] < target) {
      left++;
    } else {
      right--;
    }
  }
}

// Time complexity: O(n^2) +O(nlog(n)) = O(n^2)
// Space complexity: O(n)

```





### [383. Ransom Note](https://leetcode.com/problems/ransom-note/) (16/11)

```typescript
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

// Time complexity: O(n^2)

// Space completiry: O(n) (Set)

```



### *[205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) (16/11)

```typescript

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return isValid(s, t) && isValid(t, s);
}

function isValid(s1: string, s2: string) {
  let obj = {} as Record<string, string>;

  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    const char2 = s2[i];

    if (!obj.hasOwnProperty(char1)) {
      obj[char1] = char2;
      continue;
    }

    if (obj[char1] !== char2) {
      return false;
    }
  }

  return true;
}

function isIsomorphic2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let charIndexS = {} as Record<string, number>;
  let charIndexT = {} as Record<string, number>;

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in charIndexS)) {
      charIndexS[s[i]] = i;
    }

    if (!(t[i] in charIndexT)) {
      charIndexT[t[i]] = i;
    }

    if (charIndexS[s[i]] !== charIndexT[t[i]]) {
      return false;
    }
  }
  return true;
}

// Time complexity: O(n)
// Space complexity: O(n)


```



### [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) (16/11)

```typescript
function lengthOfLongestSubstring2(s: string): number {
  let ans = 0;
  let obj = {} as Record<string, number>;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    if (!obj.hasOwnProperty(s[windowEnd])) {
      ans = Math.max(ans, windowEnd - windowStart + 1);
    } else {
      // find repetition
      const idx = obj[s[windowEnd]] + 1;
      while (windowStart < idx) {
        delete obj[s[windowStart]];
        windowStart++;
      }
    }

    obj[s[windowEnd]] = windowEnd;
  }

  return ans;
}

function lengthOfLongestSubstring3(s: string): number {
  let ans = 0;
  let obj = {} as Record<string, number>;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    if (!obj.hasOwnProperty(s[windowEnd])) {
      obj[s[windowEnd]] = 1;
    } else {
      obj[s[windowEnd]]++;
    }

    while (obj[s[windowEnd]] > 1) {
      obj[s[windowStart]]--;
      windowStart++;
    }

    ans = Math.max(ans, windowEnd - windowStart + 1);
  }

  return ans;
}

// Time complexity: O(n)
// Space complexity: O(n)

```



### [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) (14/11)

```typescript
function minSubArrayLen(target: number, nums: number[]): number {
  let windowStart = 0;
  let ans = Infinity;

  let count = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    count += nums[windowEnd];

    while (count >= target) {
      ans = Math.min(ans, windowEnd - windowStart + 1);
      count -= nums[windowStart];
      windowStart++;
    }
  }

  return ans === Infinity ? 0 : ans;
}

// Time complexity: O(n)
// Space complexity: O(1)

function minSubArrayLen2(target: number, nums: number[]): number {
  const n = nums.length;
  let ans = Infinity;

  const prefix = new Array(n + 1).fill(0);

  for (let i = 1; i < prefix.length; i++) {
    prefix[i] = nums[i - 1] + prefix[i - 1];
  }

  function lowerBound(target: number) {
    let low = 0;
    let high = prefix.length - 1;
    let ans = prefix.length;

    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);

      if (prefix[mid] >= target) {
        high = mid - 1;
        ans = mid;
      } else {
        low = mid + 1;
      }
    }

    return ans;
  }

  for (let i = 0; i < nums.length; i++) {
    const targetNum = prefix[i] + target;
    const l = lowerBound(targetNum);

    if (l < prefix.length) {
      ans = Math.min(ans, l - i);
    }
  }

  return ans === Infinity ? 0 : ans;
}

// Time complexity: O(nlog(n))
// Space complexity: O(n)

```



### **[76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) (17/11)

```typescript

function minWindow(s: string, t: string): string {
  if (s.length < t.length) return '';
  if (s === t) return s;

  let obj = {} as Record<string, number>;

  // record the frequency of each letter in t

  for (let char of t) {
    if (!(char in obj)) {
      obj[char] = 1;
      continue;
    }
    obj[char]++;
  }

  let windowStart = 0;
  let ans = s + t;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const char = s[windowEnd];

    if (char in obj) {
      obj[char]--;

      while (!withPosValue(obj)) {
        if (ans.length > windowEnd - windowStart + 1) {
          ans = s.slice(windowStart, windowEnd + 1);
        }

        if (s[windowStart] in obj) {
          obj[s[windowStart]]++;
        }
        windowStart++;
      }
    }
  }

  return ans === s + t ? '' : ans;
}

function withPosValue(obj: Record<string, number>) {
  for (const key in obj) {
    if (obj[key] > 0) {
      return true;
    }
  }
  return false;
}

// Time complexity: O(n^2)
// Space complexity: O(n)

function minWindow2(s: string, t: string): string {
  if (s.length < t.length) return '';

  let need: Record<string, number> = {};

  for (const char of t) {
    need[char] = (need[char] ?? 0) + 1;
  }

  let windowStart = 0;
  let bestStart = 0;
  let bestLen = Infinity;
  let needCount = t.length;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const char = s[windowEnd];

    if (char in need) {
      if (need[char] > 0) {
        needCount--;
      }
      need[char]--;
    }

    while (needCount === 0) {
      const windowLen = windowEnd - windowStart + 1;
      if (windowLen < bestLen) {
        bestLen = windowLen;
        bestStart = windowStart;
      }

      let leftChar = s[windowStart];

      if (leftChar in need) {
        need[leftChar]++;
        if (need[leftChar] > 0) {
          needCount++;
        }
      }

      windowStart++;
    }
  }

  return bestLen === Infinity ? '' : s.slice(bestStart, bestStart + bestLen);
}

// Time complexity: O(m+n)
// Space complexity: O(n)


```





### *[242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) (17/11)

```typescript

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let need: Record<string, number> = {};

  for (const char of s) {
    need[char] = (need[char] ?? 0) + 1;
  }

  for (const char of t) {
    if (!(char in need) || need[char] <= 0) {
      return false;
    }

    need[char]--;
  }

  return true;
}

function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // it's 26!!!!
  const count = new Array(26).fill(0);

  for (const char of s) {
    count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }

  for (const char of t) {
    if (count[char.charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
      return false;
    }
    count[char.charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
  }
  return true;
}

// Time complexity: O(m+n)
// Space complexity: O9n

```



### [*290. Word Pattern](https://leetcode.com/problems/word-pattern/) (17/11)



use `hasOwnProperty` for string :)

```typescript

function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  const patternObj: Record<string, number> = {};
  const wordsObj: Record<string, number> = {};

  for (let i = 0; i < pattern.length; i++) {
    // for test cases like "dog constructor constructor dog"
    // constructor will be a function and in any js object
    if (!patternObj.hasOwnProperty(pattern[i])) {
      patternObj[pattern[i]] = i;
    }

    if (!wordsObj.hasOwnProperty(words[i])) {
      wordsObj[words[i]] = i;
    }

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
    
    // avoid repetition
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

console.log(wordPattern('abba', 'dog constructor constructor dog'));

```



### [1. Two Sum](https://leetcode.com/problems/two-sum/) (18/11)

it cannot be sorted

```typescript

function twoSum(nums: number[], target: number): number[] {
  const dic: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    // if it's string, using hasOwnProperty
    if (need in dic) {
      return [dic[need], i];
    }
    dic[nums[i]] = i;
  }

  return [];
}

```



### **[202. Happy Number](https://leetcode.com/problems/happy-number/) (18/11)



```typescript
function isHappy(n: number): boolean {
  const visit = new Set();
  while (!visit.has(n)) {
    visit.add(n);
    n = getSquareSum(n);
    if (n === 1) {
      return true;
    }
  }
  return false;
}

/*
Complexity
Time complexity: O(logn)
In the isHappy function, the sum of the squares of each digit is calculated to generate the next number. 
Repeating this operation will eventually cause the sequence to converge within a certain range. Specifically, 
no matter how large the starting number is, 
continuously calculating the sum of the squares will always cause the sequence to converge to a single-digit or two-digit number.

Due to this convergence, the number of iterations in the while loop is bounded within a certain range. 
Specifically, the number of iterations until the sequence converges to a single-digit or two-digit number is limited, 
and this is the constant k. Therefore, the number of iterations is bounded by a constant, making the time complexity O(k).

Since O(k) is a small constant, the time complexity can be simplified from O(k∗logn) to O(logn). 
Here, O(logn) represents the time to calculate the sum of the squares of each digit.

Space complexity: O(k)
k is the number of unique numbers encountered and stored in the visit set before a cycle is detected or the number 1 is found.
*/

// Time complexity: O(log(n))
// Space complexity: O(log(n))

function isHappy2(n: number): boolean {
  let fast = n;
  let slow = n;

  while (true) {
    fast = getSquareSum(fast);
    slow = getSquareSum(getSquareSum(slow));
    if (fast === slow) {
      break;
    }
  }

  return slow === 1;
}

/*

Time

Same reasoning:

Each loop does a constant number of getSquareSum calls → O(log n) per iteration.

Number of iterations until cycle is again bounded by a constant.

So overall: Time complexity: O(log n) (or O(1) with fixed-width ints).

Space

Only a few variables: fast, slow, and locals inside getSquareSum.

No Set, no extra data structures.

Space complexity: O(1).

*/

// Time complexity: O(log(n))
// Space complexity: O(1)

function getSquareSum(n: number) {
  let ans = 0;
  while (n !== 0) {
    const remainder = n % 10;
    ans += Math.pow(remainder, 2);
    n = Math.floor(n / 10);
  }
  return ans;
}

// Number of iterations = number of digits of n.

/*

If n is a positive integer:

Numbers from 1 to 9 → 1 digit

10 to 99 → 2 digits

100 to 999 → 3 digits

…

10^(k-1) to 10^k - 1 → k digits

So if n has k digits, it lies roughly around 10^(k-1) to 10^k.

10^(k-1) ≤ n < 10^k

k-1 ≤ log10(n) < k

number of digits = Θ(log n)

*/



/*

1-9 1 digit
10 - 99 2 digits
100 - 999 3 digits

k digits represent

10^(k-1) <= n < 10^k

(k-1) <= log10(n) < k
O(log(n))
*/

```





### *[219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)(18/11)

```typescript

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const seen: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num in seen && i - seen[num] <= k) {
      return true;
    }

    seen[num] = i;
  }

  return false;
}

function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    // index of any number before this will not be considered
    if (i > k) {
      seen.delete(nums[i - k - 1]);
    }

    if (seen.has(nums[i])) {
      return true;
    }

    seen.add(nums[i]);
  }

  return false;
}

// Time complexity: O(n)
// Space complexity: O(n)

```



### ***[49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

```typescript

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

```



### ***[128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) (19/11)



```typescript

function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let length = 1;

      while (numSet.has(num + length)) {
        length++;
      }

      longest = Math.max(longest, length);
    }
  }
  return longest;
}

// Time compleixty: O(n)
// Space complexity: O(n)


```



### [228. Summary Ranges](https://leetcode.com/problems/summary-ranges/) (19/11)

```typescript

function summaryRanges(nums: number[]): string[] {
  let idx = 0;
  let ans = [];

  while (idx < nums.length) {
    const num = nums[idx];
    let count = 1;

    while (num + count === nums[idx + count]) {
      count++;
    }

    if (count === 1) {
      ans.push(String(num));
    } else {
      ans.push(String(num) + '->' + String(num + count - 1));
    }

    idx += count;
  }

  return ans;
}

function summaryRanges2(nums: number[]): string[] {
  let i = 0;
  let ans = [];

  while (i < nums.length) {
    const start = nums[i];

    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }

    const end = nums[i];

    if (start === end) {
      ans.push(`${start}`);
    } else {
      ans.push(`${start}->${end}`);
    }
    i++;
  }

  return ans;
}

// Time compleixty: O(n)
// Space complexity: O(1) or O(n) inclusing output

```



### ***[36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)(19/11)

```typescript


function isValidSudoku2(board: string[][]): boolean {
  const rows: Set<string>[] = [];
  const cols: Set<string>[] = [];
  const boxes: Set<string>[] = [];

  for (let i = 0; i < 9; i++) {
    rows.push(new Set());
    cols.push(new Set());
    boxes.push(new Set());
  }

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === '.') {
        continue;
      }

      const val = board[r][c];

      const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(val) || cols[c].has(val) || boxes[boxIdx].has(val)) {
        return false;
      }

      rows[r].add(val);
      cols[c].add(val);
      boxes[boxIdx].add(val);
    }
  }

  return true;
}

// Time compleixty: O(9*9) = O(1)
// Space complexity: rows(81) + cols(81) + boxes(81) = 243
// O(243) = O(1)


```



### [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/) (20/11)

```typescript
function merge(intervals: number[][]): number[][] {
  // Sort intervals in non descending order by their first index
  const sorted = intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

    for (let i = 1; i < sorted.length; i++) {

        const prev = merged[merged.length - 1];
        const interval = sorted[i];

        if (interval[0] <= prev[1]) {
            prev[0] = Math.min(interval[0], prev[0]);
            prev[1] = Math.max(interval[1], prev[1]);
            continue;
        }

        merged.push(interval);

    }

  return merged;
}

// Time complexity: O(nlog(n)) sorting
// Space complexity:O(n)

```



### [57. Insert Interval](https://leetcode.com/problems/insert-interval/) (20/11)

```typescript

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const sorted = [...intervals, newInterval].sort((a, b) => a[0] - b[0]);

  const merged = [sorted[0]];

  for (let i = 0; i < sorted.length; i++) {
    const prev = merged[merged.length - 1];

    const interval = sorted[i];

    if (interval[0] <= prev[1]) {
      if (interval[1] > prev[1]) {
        prev[1] = interval[1];
      }
      continue;
    }
    merged.push(interval);
  }

  return merged;
}

// Time complexity: O(nlog(n)) sorting
// Space complexity:O(n)

function insert2(intervals: number[][], newInterval: number[]): number[][] {
  const ans = [];
  let i = 0;
  let n = intervals.length;

  while (i < n && intervals[i][1] < newInterval[0]) {
    ans.push(intervals[i]);
    i++;
  }

  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  ans.push(newInterval);
  ans.push(...intervals.slice(i));

  return ans;
}

// Time complexity: O(n) 
// Space complexity:O(n)



```



### *[452. Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) (22/11)



```typescript

function findMinArrowShots(points: number[][]): number {
  // Sort

  const sorted = points.sort((a, b) => a[0] - b[0]);

  const ans = [sorted[0]];

  for (let i = 0; i < sorted.length; i++) {
    const prev = ans[ans.length - 1];
    const interval = sorted[i];

    if (interval[0] <= prev[1]) {
      prev[0] = Math.max(prev[0], interval[0]);
      prev[1] = Math.min(prev[1], interval[1]);
      continue;
    }

    ans.push(interval);
  }

  return ans.length;
}

// Time complexity: O(nlog(n))
// Space complexity: O(n)

function findMinArrowShots(points: number[][]): number {

    // Sort

    const sorted = points.sort((a,b)=> a[0] - b[0]);

    let arrows = 1;
    let prev = sorted[0];

    for (let i = 0; i < sorted.length; i++) {

        const interval = sorted[i];

        if (interval[0] <= prev[1]) {
            prev[0] = Math.max(prev[0], interval[0]);
            prev[1] = Math.min(prev[1], interval[1]);
            continue;
        }

        prev = interval;
        arrows++;
    }

    return arrows;

};

// Time complexity: O(nlog(n))
// Space complexity: O(1)

```



### [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) (9/12)

```typescript

function isValid(s: string): boolean {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (let char of s) {
    if (Object.keys(map).includes(char)) {
      stack.push(char);
      continue;
    }

    const lastEle = stack.pop();

    if (char !== map[lastEle as keyof typeof map]) {
      return false;
    }
  }

  return stack.length === 0;
}

// Time complexity: O(n))
// Space complexity: O(n)

```



### [71. Simplify Path](https://leetcode.com/problems/simplify-path/) (9/12)

```typescript

function simplifyPath(path: string): string {
    const stack = [];
    const pathArray = path.split('/').filter((a)=> !!a && a !== '.');

    for (let p of pathArray) {
        if (p === '..') {
            stack.pop();
            continue;
        } 
        stack.push(p);
    }

    return '/' + stack.join('/');
};


// Time complexity: O(n))
// Space complexity: O(n)
```



### 150. [ Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) (9/11)



```typescript
function evalRPN(tokens: string[]): number {
  const stack = [];
  const operators = ['+', '-', '*', '/'];

  for (let s of tokens) {
    if (s === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (s === '-') {
      const second = stack.pop();
      const first = stack.pop();
      stack.push(first - second);
    } else if (s === '*') {
      const second = stack.pop();
      const first = stack.pop();
      stack.push(first * second);
    } else if (s === '/') {
      const second = stack.pop();
      const first = stack.pop();
      stack.push(parseInt(String(first / second)));
    } else {
      stack.push(parseInt(s));
    }
  }

  return stack[0];
}

// Time complexity: O(n))
// Space complexity: O(n)

```





### [**54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) (10/12)

```typescript

function spiralOrder(matrix: number[][]): number[] {

  let bottomLeftPtr = { row: 0, col: 0 };
  let bottomRightPtr = { row: 0, col: matrix[0].length - 1 };
  let topRightPtr = { row: matrix.length - 1, col: matrix[0].length - 1 };
  let topLeftPtr = { row: matrix.length - 1, col: 0 };

  let ans = [];
  let totalLen = matrix.length * matrix[0].length;

  while (ans.length < totalLen) {
    let bottomLeft = { ...bottomLeftPtr };
    let bottomRight = { ...bottomRightPtr };
    let topRight = { ...topRightPtr };
    let topLeft = { ...topLeftPtr };

    while (bottomLeft.col <= bottomRight.col && ans.length < totalLen) {
      ans.push(matrix[bottomLeft.row][bottomLeft.col]);
      bottomLeft.col += 1;
    }

    bottomRight.row += 1;
    while (bottomRight.row <= topRight.row && ans.length < totalLen) {
      ans.push(matrix[bottomRight.row][bottomRight.col]);
      bottomRight.row += 1;
    }

    topRight.col -= 1;
    while (topRight.col >= topLeft.col && ans.length < totalLen) {
      ans.push(matrix[topRight.row][topRight.col]);
      topRight.col -= 1;
    }

    topLeft.row -= 1;
    while (topLeft.row > bottomLeft.row && ans.length < totalLen) {
      ans.push(matrix[topLeft.row][topLeft.col]);
      topLeft.row -= 1;
    }

    bottomLeftPtr.row += 1;
    bottomLeftPtr.col += 1

    bottomRightPtr.row += 1;
    bottomRightPtr.col -= 1

    topRightPtr.row -= 1;
    topRightPtr.col -= 1

    topLeftPtr.row -= 1;
    topLeftPtr.col += 1;

  }

  return ans;

};


function spiralOrder(matrix: number[][]): number[] {

    const rows = matrix.length;
    const cols = matrix[0].length;

    let x = 0;
    let y = 0;

    // start with moving right
    let dx = 1;
    let dy = 0;

    let INVALID_NUM = 101;
    let ans = [];

    while (ans.length < rows * cols) {
        
        const val = matrix[y][x];
        ans.push(val);
        matrix[y][x] = INVALID_NUM;

        // check if current step is out of bound or a repetitive step

        if (!(x + dx < cols && x + dx >= 0 && y + dy < rows && y + dy >=0) || matrix[y+dy][x+dx] === INVALID_NUM) {
            [dx, dy] = [-dy, dx];
        }

        x += dx;
        y += dy;
    }

    return ans;    
};


// Time complexity: O(m*n)
// Space complexity: Aside from ans, you only use a few pointers and temporary copies → O(1) extra space.

```



### *[48. Rotate Image](https://leetcode.com/problems/rotate-image/) (10/12)

```typescript

function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const nums = [];

  for (let col = 0; col < n; col++) {
    for (let row = n - 1; row >= 0; row--) {
      nums.push(matrix[row][col]);
    }
  }

  let idx = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      matrix[row][col] = nums[idx];
      idx++;
    }
  }
}

// Time complexity O(n^2)
// Space complexity O(n^2)

function rotate2(matrix: number[][]): void {
  const n = matrix.length;

  // get transpose matrix;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < row; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }

  // reverse each row
  for (let row = 0; row < n; row++) {
    matrix[row].reverse();
  }
}

// Time complexity O(n^2)
// Space complexity O(1)

```



### **[73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) (10/12)



```typescript

function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const dup_matrix = [];

  for (let row = 0; row < rows; row++) {
    dup_matrix[row] = [];
    for (let col = 0; col < cols; col++) {
      dup_matrix[row][col] = matrix[row][col];
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0 && dup_matrix[row][col] === 0) {
        for (let i = 0; i < cols; i++) {
          matrix[row][i] = 0;
        }
        for (let j = 0; j < rows; j++) {
          matrix[j][col] = 0;
        }
      }
    }
  }
}

// time complexity: O(m*n * (m+n))
// Space compleixty: O(m*n)

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes2(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let firstRowHasZero = false;
  let firstColHasZero = false;

  // check if first row has zero
  for (let col = 0; col < cols; col++) {
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // check if first col has zero
  for (let row = 0; row < rows; row++) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Use first row and first col as marker
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  // set marked rows to 0
  for (let row = 1; row < rows; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 1; col < cols; col++) {
        matrix[row][col] = 0;
      }
    }
  }

  // set marked col to 0
  for (let col = 1; col < cols; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 1; row < rows; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  // update first row to 0 if it has 0
  if (firstRowHasZero) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }

  // update first col to 0 if it has 0
  if (firstColHasZero) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }
}

// Time complexity: O(m*n)
// Space complexity: O(1)



// dodge but inspired by 289. Game of Life
function setZeroes(matrix: number[][]): void {

    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col ++) {

            if (matrix[row][col] === 0) {

                for (let c = 0; c < cols; c++) {
                    if (matrix[row][c] !== 0) {
                        matrix[row][c]  = null;
                    }
                }

                for (let r = 0; r < rows; r++) {
                    if (matrix[r][col] !== 0) {
                        matrix[r][col] = null;
                    }
                }
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] === null) {
                matrix[row][col] = 0;
            }
        }
    }
};

// time complexity: O(m*n * (m+n))
// Space compleixty: O(1)

```



### **289. [Game of Life](https://leetcode.com/problems/game-of-life/) (11/12)



```typescript

function gameOfLife(board: number[][]): void {
  const duplicateBoard = [];
  const rows = board.length;
  const cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    duplicateBoard[row] = [];
    for (let col = 0; col < cols; col++) {
      duplicateBoard[row][col] = board[row][col];
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // check its neighbours
      const topLeft = {
        row: row - 1,
        col: col - 1,
      };

      const top = {
        row: row - 1,
        col: col,
      };

      const topRight = {
        row: row - 1,
        col: col + 1,
      };

      const right = {
        row: row,
        col: col + 1,
      };

      const bottomRight = {
        row: row + 1,
        col: col + 1,
      };

      const bottom = {
        row: row + 1,
        col: col,
      };

      const bottomLeft = {
        row: row + 1,
        col: col - 1,
      };

      const left = {
        row: row,
        col: col - 1,
      };

      const neighbours = [
        topLeft,
        top,
        topRight,
        right,
        bottomRight,
        bottom,
        bottomLeft,
        left,
      ];
      const neighborCount = countAliveNeighbors(
        duplicateBoard,
        neighbours,
        rows,
        cols
      );
      board[row][col] = updateState(neighborCount, board[row][col]);
    }
  }
}

// Time complexity: O(r*c)
// Space complexity: O(r*c)

function updateState(neighborCount: number, currentState: number) {
  let newState = currentState;

  if (currentState === 1 && (neighborCount < 2 || neighborCount > 3)) {
    newState = 0;
  } else if (currentState === 0 && neighborCount === 3) {
    newState = 1;
  }
  return newState;
}

function countAliveNeighbors(
  duplicateBoard: number[][],
  neighbors: any,
  rows: number,
  cols: number
) {
  let count = 0;
  neighbors.forEach(({ row, col }) => {
    if (isWithinBorad(row, col, rows, cols) && duplicateBoard[row][col] === 1) {
      count++;
    }
  });
  return count;
}

function isWithinBorad(row: number, col: number, rows: number, cols: number) {
  if (row < rows && row >= 0 && col < cols && col >= 0) {
    return true;
  }
  return false;
}

function gameOfLife2(board: number[][]): void {
  // -1 to mark a cell that was alive but die
  // 2 to mark a cell that was die but alive

  const rows = board.length;
  const cols = board[0].length;

  const countLives = (r: number, c: number) => {
    let count = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) {
          continue;
        }

        if (
          r + dr >= 0 &&
          r + dr < rows &&
          c + dc >= 0 &&
          c + dc < cols &&
          Math.abs(board[r + dr][c + dc]) === 1
        ) {
          count++;
        }
      }
    }
    return count;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const liveNeighbors = countLives(row, col);

      if (board[row][col] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[row][col] = -1;
        continue;
      }

      if (board[row][col] === 0 && liveNeighbors === 3) {
        board[row][col] = 2;
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      board[row][col] = board[row][col] > 0 ? 1 : 0;
    }
  }
}

// Time compleixty: O(r*c)
// Space complexity: O(1)

```



### [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) (11/12)

```typescript

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast!.next!.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

// Time complexity: O(n)
// Space compleixty: O(1)

```



### *[2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) (11/12)



```typescript


function addTwoNumbers4(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let total = 0;
  let carry = 0;

  let dummy = new ListNode();
  let newNode = dummy;

  while (l1 || l2 || carry) {
    total = carry;

    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    let num = total % 10;
    carry = Math.floor(total / 10);

    newNode.next = new ListNode(num);
    newNode = newNode.next;
  }

  return dummy.next;
}

// Time complexity: O(n)
// Space complexity: O(1)

```



### *[21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) (12/12)



```typescript

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }

  cur.next = list1 ? list1 : list2;

  return dummy.next;
}

// Time complexity: O(m+n)
// Space complexity: O(1)

function mergeTwoListsRec(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 || !list2) {
    return list1 ? list1 : list2;
  }

  if (list1.val > list2.val) {
    // let temp = list1;
    // list1 = list2;
    // list2 = temp;
    [list1, list2] = [list2, list1];
  }

  list1.next = mergeTwoLists(list1.next, list2);
  return list1;
}

// Time complexity: O(m+n)
// Space complexity: O(m+n)

```





### **[138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) (12/12)



```typescript

function copyRandomList(head: _Node | null): _Node | null {
  const map = new Map<_Node, _Node>();

  let cur = head;

  while (cur) {
    map.set(cur, new _Node(cur.val));
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    const node = map.get(cur);
    node.next = map.get(cur.next) || null;
    node.random = map.get(cur.random) || null;
    cur = cur.next;
  }

  return map.get(head);
}

// time complexity: O(n)
// space complexity: O(n)

```



### **[92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/) (12/12)

```typescript

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let dummy = new ListNode();
  dummy.next = head;
  let leftPre = dummy;

  for (let i = 0; i < left - 1; i++) {
    leftPre = head;
    head = head.next;
  }

  let pre = null;

  // reverse nodes between left and right
  for (let i = 0; i <= right - left; i++) {
    let nxt = head.next;
    head.next = pre;
    pre = head;
    head = nxt;
  }

  leftPre.next.next = head;
  leftPre.next = pre;

  return dummy.next;
}


// Time complexity: O(n)
// Space complexity: O(1)

```



### [*19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) (12/12)

```typescript
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let listLen = 0;
  let cur = head;

  while (cur) {
    listLen++;
    cur = cur.next;
  }

  let dummy = new ListNode();
  dummy.next = head;
  let leftPre = dummy;

  for (let i = 0; i < listLen - n; i++) {
    leftPre = head;
    head = head.next;
  }

  leftPre.next = head.next;
  return dummy.next;
}

// Time complexity: O(n)
// Space complexity: O(1)

function removeNthRec(head: ListNode | null, n: number) {
  if (!head) {
    return head;
  }
  if (n === 0) {
    return head.next;
  }
  head.next = removeNthRec(head.next, n - 1);
  return head;
}

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  let nodeCount = 0;

  let cur = head;

  while (cur) {
    nodeCount++;
    cur = cur.next;
  }

  return removeNthRec(head, nodeCount - n);
}

// Time complexity: O(n)
// Space complexity: O(n)

function removeNthFromEnd3(head: ListNode | null, n: number): ListNode | null {
  let ans = new ListNode(0, head);

  for (let i = 0; i < n; i++) {
    head = head.next;
  }

  let dummy = ans;

  while (head) {
    head = head.next;
    dummy = dummy.next;
  }

  dummy.next = dummy.next.next;

  return ans.next;
}

// Time complexity: O(n)
// Space complexity: O(1)

```



### *[86. Partition List](https://leetcode.com/problems/partition-list/) (13/12)

```typescript
function partition(head: ListNode | null, x: number): ListNode | null {
  const less = [];
  const greaterEqual = [];

  for (let cur = head; cur !== null; cur = cur.next) {
    if (cur.val < x) {
      less.push(cur.val);
    } else {
      greaterEqual.push(cur.val);
    }
  }

  const combined = [...less, ...greaterEqual];

  let dummy = new ListNode();
  let cur = dummy;

  for (let val of combined) {
    cur.next = new ListNode(val);
    cur = cur.next;
  }

  return dummy.next;
}

function partition2(head: ListNode | null, x: number): ListNode | null {
  const sList = new ListNode();
  const bList = new ListNode();
  let small = sList;
  let big = bList;

  for (let cur = head; cur !== null; cur = cur.next) {
    if (cur.val < x) {
      small.next = new ListNode(cur.val);
      small = small.next;
    } else {
      big.next = new ListNode(cur.val);
      big = big.next;
    }
  }

  small.next = bList.next;
  big.next = null;

  return sList.next;
}

// Time compleixty: O(n)
// Space complexity: O(n)

```



