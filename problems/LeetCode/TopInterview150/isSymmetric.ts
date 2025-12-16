function isMirror(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 && !root2) {
    return true;
  }

  if (!root1 || !root2 || root1.val !== root2.val) {
    return false;
  }

  return isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return isMirror(root.left, root.right);
}

// Time complexity: O(n)
// Space complexity: O(h)
