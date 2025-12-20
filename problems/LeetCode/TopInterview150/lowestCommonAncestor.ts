function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (!root) return root;

  if (root === p || root === q) {
    return root;
  }

  const l = lowestCommonAncestor(root.left, p, q);
  const r = lowestCommonAncestor(root.right, p, q);

  if (l && r) {
    return root;
  }

  return l || r;
}

// Time compleixity: O(n)
// Space compleixty: O(h)
