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

