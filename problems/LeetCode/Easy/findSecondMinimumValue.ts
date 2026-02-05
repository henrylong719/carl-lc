function findSecondMinimumValue(root: TreeNode | null): number {
  if (!root) return -1;

  const minimum = root.val;
  let res = Infinity;

  const dfs = (node: TreeNode | null) => {
    if (!node) return;

    if (node.val > res) return;

    if (node.val > minimum) {
      res = node.val;
      return;
    }

    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  return res === Infinity ? -1 : res;
}

// Time: O(n)
// Space: O(h)
