function longestZigZag(root: TreeNode | null): number {
  let ans = 0;

  const dfs = (node: TreeNode | null, leftLen: number, rightLen: number) => {
    if (!node) return;

    ans = Math.max(ans, leftLen, rightLen);

    dfs(node.left, rightLen + 1, 0);
    dfs(node.right, 0, leftLen + 1);
  };

  dfs(root, 0, 0);
  return ans;
}

// Time(O(n))
// Space (O(h))
