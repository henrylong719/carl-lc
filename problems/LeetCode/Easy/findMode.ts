function findMode(root: TreeNode | null): number[] {
  let count = 0;
  let maxCount = 0;
  let prev = -Infinity;
  let res = [];

  const dfs = (node: TreeNode | null) => {
    if (!node) return;

    dfs(node.left);

    if (node.val === prev) {
      count++;
    } else {
      count = 1;
    }

    if (count > maxCount) {
      maxCount = count;
      res = [node.val];
    } else if (count === maxCount) {
      res.push(node.val);
    }

    prev = node.val;
    dfs(node.right);
  };

  dfs(root);
  return res;
}

// Time: O(n)
// Space: O(n)
