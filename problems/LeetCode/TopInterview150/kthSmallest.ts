function kthSmallest(root: TreeNode | null, k: number): number {
  let ans = 0;

  const dfs = (root: TreeNode | null) => {
    if (!root) return;
    dfs(root.left);
    k--;
    if (k === 0) {
      ans = root.val;
      return;
    }
    dfs(root.right);
  };

  dfs(root);
  return ans;
}

// Time complexity O(h + k)
// You visit:
// the nodes along the path down to the leftmost area: about O(h)
// plus the next k visited nodes in sorted order: about O(k)
// worst case k = n;

// Space complexity: O(h)
