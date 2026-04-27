function subarraySum(nums: number[], k: number): number {
  // sum(i, j) = prefixSum[j] - prefixSum[i-1]
  // prefixSum[j] - prefixSum[i-1] = k
  // prefixSum[i-1] = prefixSum[j] - k

  let count = 0;
  let prefixCount = new Map<number, number>();
  prefixCount.set(0, 1);
  let prefixSum = 0;

  for (const num of nums) {
    prefixSum += num;
    const need = prefixSum - k;

    if (prefixCount.has(need)) {
      count += prefixCount.get(need)!;
    }

    prefixCount.set(prefixSum, (prefixCount.get(prefixSum) ?? 0) + 1);
  }

  return count;
}

// Time: O(n)
// Space: O(n)
