function maxOperations(nums: number[], k: number): number {
  const sorted = nums.sort((a, b) => a - b);

  let l = 0;
  let r = sorted.length - 1;
  let ans = 0;

  while (l < r) {
    const sum = sorted[l] + sorted[r];

    if (sum == k) {
      ans++;
      l++;
      r--;
    } else if (sum > k) {
      r--;
    } else {
      l++;
    }
  }

  return ans;
}

// Time: O(nlog(n))
// Space: O(1)

function maxOperations(nums: number[], k: number): number {
  const map: Record<number, number> = {};
  let ans = 0;

  for (let num of nums) {
    const need = k - num;
    if (need in map && map[need] > 0) {
      ans++;
      map[need] -= 1;
      continue;
    }

    map[num] = (map[num] ?? 0) + 1;
  }

  return ans;
}

// Time: O(n))
// Space: O(n)
