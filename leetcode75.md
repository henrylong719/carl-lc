### *[169. Majority Element](https://leetcode.com/problems/majority-element/) (7/3)

```typescript
function majorityElement(nums: number[]): number {
    const n = nums.length;
    nums.sort((a,b)=> a - b);
    return nums[Math.floor(n / 2)];
};

// Time: O(nlog(n))
// Space: O(1)

// ** cannot be Math.ceil()
// e.g. [1]

```



```typescript
function majorityElement(nums: number[]): number {

    let candidate = 0;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += candidate === num ? 1 : -1;
    }
    return candidate;
};

// Time: O(n)
// Space: O(1)
```



### *[1. Two Sum](https://leetcode.com/problems/two-sum/) (20/3)

```typescript
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (map.has(need)) {
      return [i, map.get(need)];
    }

    map.set(nums[i], i);
  }
}


// Time: O(n)
// Space: O(n)

```



### *[2239. Find Closest Number to Zero](https://leetcode.com/problems/find-closest-number-to-zero/) (20/3)

```typescript
function findClosestNumber(nums: number[]): number {
  let min = Infinity;
  let res = nums[0];

  for (let num of nums) {
    const val = Math.abs(num);
    if (val <= min) {
      if (val === min && num < res) continue;
      min = val;
      res = num;
    }
  }

  return res;
}

function findClosestNumber(nums: number[]): number {

    let best = nums[0];

    for (const x of nums) {
        const ax = Math.abs(x);
        const ab = Math.abs(best);

        if (ax < ab || ax === ab && x > best) {
            best = x;
        }
    }
    
    return best;
};


// Time: O(n)
// Space: O(1)
```



### [1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/) (21/3)

```typescript
function mergeAlternately(word1: string, word2: string): string {
  let idx1 = 0;
  let idx2 = 0;
  let res: string[] = [];

  while (idx1 < word1.length || idx2 < word2.length) {
    if (idx1 < word1.length) {
      res.push(word1[idx1]);
      idx1++;
    }

    if (idx2 < word2.length) {
      res.push(word2[idx2]);
      idx2++;
    }
  }

  return res.join('');
}


function mergeAlternately(word1: string, word2: string): string {
  if (!word1 || !word2) return word1 || word2;

  const res: string[] = new Array(word1.length + word2.length);

  let ptr = 0;

  for (let i = 0; i < word1.length; i++) {
    res[ptr] = word1[i];
    ptr += 2;
  }

  ptr = 1;

  for (let i = 0; i < word2.length; i++) {
    res[ptr] = word2[i];
    ptr += 2;
  }

  return res.join('');
}

function mergeAlternately(word1: string, word2: string): string {
  if (!word1 || !word2) return word1 || word2;

  let res: string[] = [];

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) {
      res.push(word1[i]);
    }

    if (i < word2.length) {
      res.push(word2[i]);
    }
  }

  return res.join('');
}

// Time: O(m+n)
// Space: O(m+n)

```





### *[1071. Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/) (21/3)

```typescript

function gcdOfStrings(str1: string, str2: string): string {
  let len1 = str1.length;
  let len2 = str2.length;

  const isDivisor = (l: number) => {
    if (len1 % l !== 0 || len2 % l !== 0) return false;

    const gcd = str1.slice(0, l);

    for (let i = 0; i < len1; i += l) {
      if (!str1.startsWith(gcd, i)) return false;
    }

    for (let j = 0; j < len2; j += l) {
      if (!str2.startsWith(gcd, j)) return false;
    }

    return true;
  };

  for (let i = Math.min(len1, len2); i > 0; i--) {
    if (isDivisor(i)) return str1.slice(0, i);
  }

  return '';
}


// Time: O(min(m,n) * (m+n))
// Space: O(min(m,n))

```



### **[151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) (21/3)

```typescript
function reverseWords(s: string): string {
    return s.split(' ').filter((str)=>!!str).reverse().join(' ');
};

// Time: O(n)
// Space: O(n)

function reverseWords(s: string): string {

    let end = s.length - 1; 
    let res = '';

    while (end >= 0) {

        let wordEnd = end;

        while (s[wordEnd] === ' ' && wordEnd >= 0) {
            wordEnd --;
        }

        let wordStart = wordEnd;

        while (s[wordStart] !== ' ' && wordStart >= 0) {
            wordStart --;
        }

        res += s.slice(wordStart + 1, wordEnd + 1) + ' ';

        end = wordStart;
    }

    return res.trim();
};

// Time: O(n)
// Space: O(n)
```



### **[605. Can Place Flowers](https://leetcode.com/problems/can-place-flowers/) (21/3)

```typescript
function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    const valid = (i: number) => {
       if (flowerbed[i] === 0 && (i === 0 || flowerbed[i-1] === 0)
       && (i === flowerbed.length - 1 || flowerbed[i+1] === 0)) {
            return true;
       }
       return false;
    }

    for (let i = 0; i < flowerbed.length; i++) {
        if (valid(i)) {
            flowerbed[i] = 1;
            n--;
        }

        if (n <= 0) return true;
    }

    return false;
};

// Time: O(n)
// Space: O(1)

```



### **[443. String Compression](https://leetcode.com/problems/string-compression/) (22/3)

```typescript

function compress(chars: string[]): number {
  let read = 0;
  let write = 0;

  while (read < chars.length) {
    const ch = chars[read];
    const start = read;

    while (read < chars.length && chars[read] === ch) read++;

    // new char or the end
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
```



### *[238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) (23/3)

```typescript
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  const res = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let product = 1;

  for (let i = n - 1; i >= 0; i--) {
    res[i] = res[i] * product;
    product *= nums[i];
  }

  return res;
}


// Time: O(n)
// Space: O(1) (exclude output array)

```



### *** [334. Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/) (23/3)

```typescript

function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }
  return false;
}

// Time: O(n)
// Space: O(1)
```



### **[283. Move Zeroes](https://leetcode.com/problems/move-zeroes/) (24/3)

```typescript

function moveZeroes(nums: number[]): void {

    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left],nums[right]] = [nums[right],nums[left]];
            left++
        }
    }
};

// Time: O(n)
// Space: O(1)
```



### [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/)

```typescript

function isSubsequence(s: string, t: string): boolean {
  let ptr = 0;

  for (const char of t) {
    if (char === s[ptr]) ptr++;
  }

  return ptr === s.length;
}

function isSubsequence(s: string, t: string): boolean {
  let sPtr = 0;
  let tPtr = 0;

  while (sPtr < s.length && tPtr < t.length) {
    if (s[sPtr] === t[tPtr]) {
      sPtr++;
    }
    tPtr++;
  }

  return sPtr === s.length;
}


// Time: O(n)
// Space: O(1)

```



### [1679. Max Number of K-Sum Pairs](https://leetcode.com/problems/max-number-of-k-sum-pairs/) (25/3)

```typescript

function maxOperations(nums: number[], k: number): number {
  let count = 0;
  let l = 0;
  let r = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (l < r) {
    const sum = nums[l] + nums[r];

    if (sum === k) {
      l++;
      r--;
      count++;
    } else if (sum > k) {
      r--;
    } else {
      l++;
    }
  }

  return count;
}

// Time: O(nlogn)
// Space: O(1)

function maxOperations(nums: number[], k: number): number {

    const map = new Map<number,number>();
    let count: number = 0;

    for (let num of nums) {
        const need = k - num;
        const needCount =  map.get(need);

        if (needCount !== undefined && needCount > 0) {
            map.set(need, needCount - 1);
            count++;
            continue;
        }

        map.set(num, (map.get(num) ?? 0) + 1);
    }

    return count;
};

// Time: O(n)
// Space: O(n)

```



### *** [1493. Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) (27/3)

```typescript
function longestSubarray(nums: number[]): number {
  let left = 0;
  let lastZero = -1;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      left = lastZero + 1;
      lastZero = right;
    }

    maxLength = Math.max(maxLength, right - left);
  }

  return maxLength;
}

function longestSubarray(nums: number[]): number {
  if (!nums.includes(0)) return nums.length - 1;

  let zeros = 0;
  let windowStart = 0;
  let res = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if (nums[windowEnd] === 0) zeros++;

    res = Math.max(res, windowEnd - windowStart + 1 - zeros);

    while (zeros > 1) {
      if (nums[windowStart] === 0) zeros--;
      windowStart++;
    }
  }

  return res;
}



function longestSubarray(nums: number[]): number {
  let left = 0;
  let zeros = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;

    while (zeros > 1) {
      if (nums[left] === 0) zeros--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left);
  }

  return maxLength;
}

// Time: O(n)
// Space: O(1)

```





### ***[1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/) (27/3)



```typescript

function longestOnes(nums: number[], k: number): number {
  let zeros = 0;
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;

    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Time: O(n)
// Space: O(1)

```



### *[1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/)(27/3)

```typescript

function largestAltitude(gain: number[]): number {

    const n = gain.length;

    const altitudes = new Array(n+1).fill(0);

    for (let i = 1; i <= n; i++) {
        altitudes[i] = gain[i-1] + altitudes[i-1];
    }

    return Math.max(...altitudes);
};

// Time: O(n)
// Space: O(n)

function largestAltitude(gain: number[]): number {

    const n = gain.length;

    let altitude = 0;
    let maxAltitude = 0; 

    for (let i = 1; i <= n; i++) {
         altitude = gain[i-1] + altitude; 
         maxAltitude = Math.max(maxAltitude, altitude);

    }

    return maxAltitude;
};

// Time: O(n)
// Space: O(1)
```



### *[724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) (27/3)

```typescript

function pivotIndex(nums: number[]): number {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  let leftTotal = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightTotal = totalSum - nums[i] - leftTotal;
    if (rightTotal === leftTotal) return i;
    leftTotal += nums[i];
  }

  return -1;
}

// Time O(n)
// Space: O(1)

```



### [1207. Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/) (28/3)

```typescript

function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>();

  for (const n of arr) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }

  const occur = [...map.values()];
  return occur.length === new Set([...occur]).size;
}

function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>();

  for (const n of arr) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }

  const seen = new Set();

  for (const n of map.values()) {
    if (seen.has(n)) return false;
    seen.add(n);
  }

  return true;
}




// Time: O(n)
// Space: O(n)

```



### **[1657. Determine if Two Strings Are Close](https://leetcode.com/problems/determine-if-two-strings-are-close/) (28/3)

```typescript


function closeStrings(word1: string, word2: string): boolean {
  // 1. two strings have same keys
  // 2. two strings have same ch frequencies

  if (word1.length !== word2.length) return false;

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  const n = word1.length;

  for (let i = 0; i < n; i++) {
    map1.set(word1[i], (map1.get(word1[i]) ?? 0) + 1);
    map2.set(word2[i], (map2.get(word2[i]) ?? 0) + 1);
  }

  if (map1.size !== map2.size) return false;

  for (const k of map1.keys()) {
    if (!map2.has(k)) return false;
  }

  const freq1 = [...map1.values()].sort((a, b) => a - b);
  const freq2 = [...map2.values()].sort((a, b) => a - b);

  if (freq1.length !== freq2.length) return false;

  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }

  return true;
}

function closeStrings(word1: string, word2: string): boolean {
  // 1. two strings have same keys
  // 2. two strings have same ch counts

  if (word1.length !== word2.length) return false;

  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);

  const n = word1.length;

  for (let i = 0; i < n; i++) {
    count1[word1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    count2[word2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; i++) {
    //  havign different keys
    if (
      (count1[i] > 0 && count2[i] === 0) ||
      (count2[i] === 0 && count1[i] > 0)
    ) {
      return false;
    }
  }

  count1.sort((a, b) => a - b);
  count2.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (count1[i] !== count2[i]) return false;
  }

  return true;
}


// k: the number of distinct characters.
// Time: O(n + klog(k))  → effectively O(n)
// Space: O(n) -> O(1)


```



### ***[2352. Equal Row and Column Pairs](https://leetcode.com/problems/equal-row-and-column-pairs/) (28/3)



**Keey in mind for cases like `[[11,1],[1,11]]` **



```typescript


function equalPairs(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const rowsCount = new Map<string, number>();

  for (let r = 0; r < rows; r++) {
    const row = grid[r].join('#');
    rowsCount.set(row, (rowsCount.get(row) ?? 0) + 1);
  }

  let ans = 0;

  for (let c = 0; c < cols; c++) {
    const colNums = [];
    for (let r = 0; r < rows; r++) colNums.push(grid[r][c]);
    const colStr = colNums.join('#');
    ans += rowsCount.get(colStr) ?? 0;
  }

  return ans;
}


// Time: O(n^2)
// Space: O(n^2)

// const rowsCount = new Map<string, number>();
// here can be up to n different row strings.
// Each row key represents n elements, so the stored keys take substantial space overall.
// That makes the map cost O(n²) space in total.


function equalPairs(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const rowStrs = [];
  const colStrs = [];

  for (let r = 0; r < rows; r++) {
    const nums = [];
    for (let c = 0; c < cols; c++) {
      nums.push(grid[r][c]);
    }
    rowStrs.push(nums.join('-'));
  }

  for (let c = 0; c < cols; c++) {
    const nums = [];
    for (let r = 0; r < rows; r++) {
      nums.push(grid[r][c]);
    }
    colStrs.push(nums.join('-'));
  }

  let count = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rowStrs[r] === colStrs[c]) count++;
    }
  }

  return count;
}

// Time: O(n^2)
// Space: O(n^2)

```



### ***[735. Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) (29/3)

```typescript

function asteroidCollision(asteroids: number[]): number[] {
  // only positive, negative collides

  const stack = [];

  for (const s of asteroids) {
    stack.push(s);

    while (
      stack.length > 1 &&
      stack[stack.length - 1] < 0 &&
      stack[stack.length - 2] > 0
    ) {
      // negative
      const top = stack[stack.length - 1];
      // positive
      const second = stack[stack.length - 2];

      if (-top === second) {
        stack.pop();
        stack.pop();
        break;
      } else if (-top < second) {
        stack.pop();
        break;
      } else if (-top > second) {
        stack.pop();
        stack.pop();
        stack.push(top);
      }
    }
  }

  return stack;
}


function asteroidCollision(asteroids: number[]): number[] {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const curr = asteroids[i];
    const last = stack[stack.length - 1];

    if (!stack.length || last < 0 || curr > 0) {
      stack.push(curr);
    } else if (last === -curr) {
      stack.pop();
    } else if (last < -curr) {
      stack.pop();
      i--;
    }
  }

  return stack;
}


// Time: O(n) (amortized)
// Space: O(n)

```





### ***[394. Decode String](https://leetcode.com/problems/decode-string/) (29/3)

```typescript

function decodeString(s: string): string {

    const countStack = [];
    const strStack = [];

    let count = 0;
    let curr = '';

    for (const ch of s) {

        if (ch >= '0' && ch <= '9') {
            count = count * 10 + ch.charCodeAt(0) - '0'.charCodeAt(0);
        } else if (ch === '[') {
            countStack.push(count);
            strStack.push(curr);
            count = 0;
            curr = '';
        } else if (ch === ']') {
            const times = countStack.pop();
            const prev = strStack.pop();
            curr = prev + curr.repeat(times);
        } else {
            curr += ch;
        }
    }
    return curr;
};


// Time: O(n + outputLength) because you must actually build the output
// Space: O(n) stack + output

```



### ***[739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) (30/3)

```typescript

function dailyTemperatures(temperatures: number[]): number[] {
  const s: number[] = [];
  const res: number[] = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (s.length > 0 && temperatures[i] > temperatures[s[s.length - 1]]) {
      const idx = s.pop();
      res[idx] = i - idx;
    }
    s.push(i);
  }

  return res;
}

// Time: O(n)
// Space: O(n)
```



### *[933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/) (30/3)

```typescript

class RecentCounter {

  	// should be queue here
    private s: number[] = [];
    private head: number = 0;

    ping(t: number): number {

        this.s.push(t);

        const limit = t - 3000;

        while (this.s[this.head] < limit) this.head++;

        // clean up to prvent memory growth
        // more than half of the memory is already useless
        if (this.head > 1024 && this.head > this.s.length / 2) {
            this.s = this.s.slice(this.head);
            this.head = 0;
        }

        return this.s.length - this.head;
    }
}

// Time:
// per ping(): amotized O(1)
// across N pings, O(N) in total

// Space:
// O(N)

```





### ***[649. Dota2 Senate](https://leetcode.com/problems/dota2-senate/) (31/3)

```typescript

function predictPartyVictory(senate: string): string {

    const n = senate.length;

    const rQueue = [];
    const dQueue = [];

    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            rQueue.push(i);
        } else {
            dQueue.push(i);
        }
    }

    let rHead = 0;
    let dHead = 0;

    while (rHead < rQueue.length && dHead < dQueue.length) {
        const r = rQueue[rHead++];
        const d = dQueue[dHead++];

        if (r < d) {
            rQueue.push(r + n);
        } else {
            dQueue.push(d + n);
        }
    }

    return rHead < rQueue.length ? 'Radiant' : 'Dire';
};

// Time: O(n) a senate can only be push limited times
// Space: O(n)
```



### *[2095. Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/) (31/3)

```typescript

function deleteMiddle(head: ListNode | null): ListNode | null {

    if (!head || !head.next) return null;

    let prev = null;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = slow.next;
    return head;
};

// Time: O(n)
// Space: O(1)
```





### ***[328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/) (31/3)

```typescript


function oddEvenList(head: ListNode | null): ListNode | null {

    if (!head || !head.next) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};

// Time: O(n)
// Space: O(1)
```

