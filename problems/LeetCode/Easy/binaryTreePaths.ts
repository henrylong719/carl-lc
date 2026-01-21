function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = [];

  if (!root) return res;

  const dfs = (node: TreeNode | null, str: string) => {
    if (!node) return;

    if (node && !node.left && !node.right) {
      str += node.val;
      res.push(str);
      return;
    }

    str += node.val + '->';
    if (node.left) dfs(node.left, str);
    if (node.right) dfs(node.right, str);
  };

  dfs(root, '');
  return res;
}

// Time: O(n)
// Space: O(n)
