function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  const height = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left = height(node.left);
    const right = height(node.right);

    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  };

  height(root);
  return diameter;
}

// Time: O(n)
// Space: O(h)
