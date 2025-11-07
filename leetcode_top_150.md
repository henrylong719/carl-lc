

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













