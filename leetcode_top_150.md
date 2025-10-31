

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

