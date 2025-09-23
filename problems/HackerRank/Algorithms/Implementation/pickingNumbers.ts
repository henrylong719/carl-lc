function pickingNumbers(a: number[]): number {
  // sort arr in ascding order
  a.sort((x, y) => x - y);

  let ans = 0;
  let window_start = 0;

  for (let window_end = 0; window_end < a.length; window_end++) {
    while (a[window_end] - a[window_start] > 1) {
      window_start++;
    }

    const window_size = window_end - window_start + 1;

    ans = Math.max(window_size, ans);
  }

  return ans;
}

// Time complexity: O(nlog(n)) sorting
// Space compexity: O(1)
