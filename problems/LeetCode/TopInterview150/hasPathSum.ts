function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  targetSum -= root.val;
  if (targetSum === 0 && !root.left && !root.right) return true;

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

// Time complexity: O(n)
// Space complexity: O(h) worse case O(n)
