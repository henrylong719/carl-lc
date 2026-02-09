function getCommon(nums1: number[], nums2: number[]): number {
  const binarySearch = (arr: number[], target: number) => {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);

      if (arr[mid] === target) {
        return true;
      }

      if (arr[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return false;
  };

  for (let num of nums1) {
    if (binarySearch(nums2, num)) return num;
  }

  return -1;
}

// Time: O(nlog(n))
// Space: O(1)

function getCommon(nums1: number[], nums2: number[]): number {
  const set2 = new Set(nums2);

  for (let num of nums1) {
    if (set2.has(num)) return num;
  }

  return -1;
}

// Time: O(n)
// Space: O(n)

function getCommon(nums1: number[], nums2: number[]): number {
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      return nums1[p1];
    }

    if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return -1;
}

// Time: O(n)
// Space: O(1)
