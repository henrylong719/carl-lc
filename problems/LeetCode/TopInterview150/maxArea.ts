function maxArea(height: number[]): number {
  let ans = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    ans = Math.max(ans, area);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return ans;
}

// Time complexity: O(n)
// Space complexity: O(1)
