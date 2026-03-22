## Array / String

### **[88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) (6/3)

```typescript
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

};

// Time: O(m+n)
// Space: O(1)

```



### **[26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) (7/3)

```typescript
function removeDuplicates(nums: number[]): number {

    if (!nums.length) return 0;

    let nextElement = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[nextElement - 1]) {
             nums[nextElement] = nums[i];
             nextElement++;
        }
    }

    return nextElement;
};

// Time: O(n)
// Space: O(1)

```



### **[80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) (7/3)

```typescript
function removeDuplicates(nums: number[]): number {

    if (nums.length <= 2) return nums.length;
    let nextElement = 2;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] === nums[nextElement-1] && nums[i] === nums[nextElement-2])    {
            continue;
        }
        nums[nextElement] = nums[i];
        nextElement++;
    }
    return nextElement;
};

// Time: O(n)
// Space: O(1)


```



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



