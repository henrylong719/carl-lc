function countNodes(root: TreeNode | null): number {
  if (!root) return 0;

  const leftDepth = (node: TreeNode | null) => {
    let depth = 0;

    while (node) {
      depth++;
      node = node.left;
    }

    return depth;
  };

  const left = leftDepth(root.left);
  const right = leftDepth(root.right);

  if (left === right) {
    // left tree is a complete binary tree
    return (1 << left) + countNodes(root.right);
  } else {
    // right tree is a complete binary tree
    return (1 << right) + countNodes(root.left);
  }
}

/**
 *  Depth complete binary tree depth log(n)
 *
 *
 *	leftDepth(root.left) O(h)
 *  leftDepth(root.right) O(h)
 *  recurse only one subtree
 *  O(h)
 *	O(h) * O(h) = O(log(n)^2)
 *
 */

// Time complexity:  O(log(n))
// Space compleixty: O(h) = O(log(n))

const leftDepth = (node: TreeNode | null) => {
  let depth = 0;

  while (node) {
    depth++;
    node = node.left;
  }

  return depth;
};

function countNodes2(root: TreeNode | null): number {
  if (!root) return 0;

  let ans = 0;

  while (root) {
    const left = leftDepth(root.left);
    const right = leftDepth(root.right);

    if (left === right) {
      ans += 1 << left;
      root = root.right;
    } else {
      ans += 1 << right;
      root = root.left;
    }
  }

  return ans;
}

// Time comleixity: O(log(n))
// Space compleixty: O(1)
