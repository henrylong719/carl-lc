function isValidBST(root: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null, min: number, max: number): boolean => {
    if (!node) {
      return true;
    }

    if (node.val >= max || node.val <= min) {
      return false;
    }

    const l = dfs(node.left, min, node.val);
    const r = dfs(node.right, node.val, max);

    return l && r;
  };

  return dfs(root, -Infinity, Infinity);
}

// Time complexity: O(n)
// Space complexity: O(h)
