function sortedArrayToBST(nums: number[]): TreeNode | null {
  const dfs = (l: number, r: number) => {
    if (l > r) {
      return null;
    }

    const mid = Math.floor((l + r) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = dfs(l, mid - 1);
    node.right = dfs(mid + 1, r);

    return node;
  };

  return dfs(0, nums.length - 1);
}

// Time: O(n)
// Space: O(logn)
