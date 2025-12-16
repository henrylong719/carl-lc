function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;

  if (!p || !q || p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Time comlexity: O(n)
// Space complexity: O(h), worse case O(n)

function isSameTreeBfs(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue: Array<[TreeNode | null, TreeNode | null]> = [[p, q]];

  while (queue.length) {
    const [a, b] = queue.shift();

    if (!a && !b) continue;

    if (!a || !b || a.val !== b.val) return false;

    queue.push([a.left, b.left]);
    queue.push([a.right, b.right]);
  }

  return true;
}

// Time comlexity: O(n)
// Space complexity: O(w), worse case O(n)
