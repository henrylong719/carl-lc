function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set();

  const dfs = (node: TreeNode | null): boolean => {
    if (!node) return false;

    const need = k - node.val;
    if (set.has(need)) return true;
    set.add(node.val);

    if (dfs(node.left)) {
      return true;
    }
    if (dfs(node.right)) {
      return true;
    }
    return false;
  };
  return dfs(root);
}

function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set();
  const dfs = (node: TreeNode): boolean => {
    if (!node) return false;
    const need = k - node.val;
    if (set.has(node.val)) return true;
    set.add(need);
    return dfs(node.left) || dfs(node.right);
  };
  return dfs(root);
}

// Time: O(n)
// Space: O(n)
