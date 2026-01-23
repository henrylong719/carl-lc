function intersect(nums1: number[], nums2: number[]): number[] {
  const counter: Record<number, number> = {};

  for (const num of nums2) {
    if (!counter.hasOwnProperty(num)) counter[num] = 0;
    counter[num]++;
  }

  const res = [];

  for (const num of nums1) {
    if (counter.hasOwnProperty(num) && counter[num] > 0) {
      res.push(num);
      counter[num]--;
    }
  }
  return res;
}

function intersect2(nums1: number[], nums2: number[]): number[] {
  let small = nums1;
  let big = nums2;
  const res = [];

  if (nums1.length > nums2.length) [small, big] = [big, small];

  const count = new Map<number, number>();

  for (const num of small) {
    count.set(num, (count.get(num) ?? 0) + 1);
  }

  for (const num of big) {
    if (count.has(num) && count.get(num)! > 0) {
      res.push(num);
      count.set(num, count.get(num)! - 1);
    }
  }

  return res;
}

// Time: O(n)
// Space: O(n)

function intersect3(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let res = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return res;
}

// Time: O(n(log(n)))
// Space: O(n)
