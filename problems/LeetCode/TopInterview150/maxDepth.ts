function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// dfs
// Time complexity: O(n)
// Space compleixty: O(h)
// The number of stack frames that can be “alive” at once equals the maximum recursion depth, which is the tree’s height h.

function maxDepthBfs(root: TreeNode | null): number {
  if (!root) return 0;

  const queue = [];
  queue.push(root);
  let depth = 0;

  while (queue.length) {
    depth += 1;
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return depth;
}

// Time complexity: O(n)
// Space compleixty: O(w)
// w is the maximum width of the tree (worst-case O(n)).
