function evaluateTree(root: TreeNode | null): boolean {
  const isLeaf = (node: TreeNode) => {
    if (!node) return false;

    if (!node.left && !node.right) return true;

    if (node.val === 1 || node.val === 0) return true;

    return false;
  };

  const dfs = (node: TreeNode | null) => {
    if (!node) return;

    dfs(node.left);
    dfs(node.right);

    if (node && isLeaf(node.left) && isLeaf(node.right)) {
      if (node.val === 2) {
        node.val = node.left.val || node.right.val;
      } else {
        node.val = node.left.val && node.right.val;
      }
    }
  };
  dfs(root);
  return root.val === 1 ? true : false;
}

function evaluateTree(root: TreeNode | null): boolean {
  if (!root) return false;

  if (!root.left && !root.right) return root.val === 1;

  const left = evaluateTree(root.left);
  const right = evaluateTree(root.right);

  if (root.val === 2) return left || right;

  return left && right;
}

// Time: O(n)
// Space: O(h)
