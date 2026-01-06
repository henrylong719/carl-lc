function pathSum(root: TreeNode | null, targetSum: number): number {
  const sum = (node: TreeNode | null, target: number): number => {
    if (!node) return 0;

    target -= node.val;

    let res = target == 0 ? 1 : 0;

    res += sum(node.left, target);
    res += sum(node.right, target);

    return res;
  };

  const dfs = (node: TreeNode): number => {
    if (!node) return 0;

    let res = sum(node, targetSum);

    res += dfs(node.left);
    res += dfs(node.right);

    return res;
  };

  return dfs(root);
}

// Time: O(n^2)
// Space: O(h)

function pathSum2(root: TreeNode | null, targetSum: number): number {
  const prefixCount = new Map<number, number>();
  prefixCount.set(0, 1);

  const dfs = (node: TreeNode | null, currentSum: number) => {
    if (!node) return 0;

    currentSum += node.val;

    const need = currentSum - targetSum;

    let ans = prefixCount.get(need) ?? 0;

    prefixCount.set(currentSum, (prefixCount.get(currentSum) ?? 0) + 1);

    ans += dfs(node.left, currentSum);
    ans += dfs(node.right, currentSum);

    prefixCount.set(currentSum, (prefixCount.get(currentSum) ?? 0) - 1);

    return ans;
  };

  return dfs(root, 0);
}

// Time: O(n)
// Space: o(h)
