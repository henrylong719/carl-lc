function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leaves1 = [] as number[];
  const leaves2 = [] as number[];

  const dfs = (node: TreeNode | null, leaves: number[]) => {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      leaves.push(node.val);
    }

    dfs(node.left, leaves);
    dfs(node.right, leaves);
  };

  dfs(root1, leaves1);
  dfs(root2, leaves2);

  if (leaves1.length !== leaves2.length) return false;

  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) return false;
  }

  return true;
}

// Time O(n+m)
// Space O(n+m)
