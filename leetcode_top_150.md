

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

