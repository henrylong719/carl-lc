function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let idx1 = 0;
  let idx2 = 0;
  let nums1_d = nums1.map((a) => a);
  let cur = 0;

  while (idx1 < m && idx2 < n) {
    let value = nums1_d[idx1];
    if (nums1_d[idx1] < nums2[idx2]) {
      value = nums1_d[idx1];
      idx1++;
    } else {
      value = nums2[idx2];
      idx2++;
    }
    nums1[cur] = value;
    cur++;
  }

  while (idx1 < m) {
    nums1[cur] = nums1_d[idx1];
    idx1++;
    cur++;
  }

  while (idx2 < n) {
    nums1[cur] = nums2[idx2];
    idx2++;
    cur++;
  }
}

function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }

  nums1.sort((a, b) => a - b);
}
