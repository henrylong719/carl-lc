function dfs(root: TreeNode | null, str: string, total: { sum: number }) {
  if (!root) {
    return;
  }

  str += String(root.val);

  if (!root.left && !root.right) {
    total.sum += Number(str);
  }

  dfs(root.left, str, total);
  dfs(root.right, str, total);
}

function sumNumbers(root: TreeNode | null): number {
  let total = { sum: 0 };
  dfs(root, '', total);
  return total.sum;
}

function sumNumbers2(root: TreeNode | null): number {
  let currentSum = 0;

  const dfs = (root: TreeNode | null, str: string) => {
    if (!root) {
      return;
    }

    str += String(root.val);

    if (!root.left && !root.right) {
      currentSum += Number(str);
    }

    dfs(root.left, str);
    dfs(root.right, str);
  };

  dfs(root, '');

  return currentSum;
}

// Time complexity: O(n)
// Space compleixty: O(h)
