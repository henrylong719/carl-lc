function increasingBST(root: TreeNode | null): TreeNode | null {
  const dummy = new TreeNode(0);
  let tail = dummy;

  const inOrder = (node: TreeNode | null) => {
    if (!node) return;

    inOrder(node.left);

    const right = node.right;
    node.left = null;
    tail.right = node;
    tail = node;

    inOrder(right);
  };

  inOrder(root);

  return dummy.right;
}

// Time: O(n)
// Space: O(h)
