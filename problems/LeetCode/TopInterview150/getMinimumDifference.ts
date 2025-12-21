function getMinimumDifference(root: TreeNode | null): number {
  let min = Infinity;
  let pre = -Infinity;

  // inorder traverse
  const dfs = (root: TreeNode | null) => {
    if (!root) return;

    dfs(root.left);
    min = Math.min(min, root.val - pre);
    pre = root.val;
    dfs(root.right);
  };

  dfs(root);

  return min;
}

// Time compleixty: O(n)
// Space complexity: O(h)
