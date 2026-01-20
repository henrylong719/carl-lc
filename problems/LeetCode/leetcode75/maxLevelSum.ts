function maxLevelSum(root: TreeNode | null): number {
  if (!root) return 0;

  let level = 1;
  let bestLevel = 1;
  let bestSum = root.val;
  let head = 0;
  let queue = [root];

  while (head < queue.length) {
    const size = queue.length - head;
    let sum = 0;

    for (let i = 0; i < size; i++) {
      const node = queue[head++];

      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (sum > bestSum) {
      bestSum = sum;
      bestLevel = level;
    }

    level++;
  }

  return bestLevel;
}

function maxLevelSum2(root: TreeNode | null): number {
  if (!root) return 0;

  const levelSum: number[] = [];

  const dfs = (node: TreeNode, level: number) => {
    if (!node) return;

    if (levelSum.length < level) {
      levelSum.push(0);
    }

    levelSum[level - 1] += node.val;

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 1);

  let maxLevelSum = levelSum[0];
  let level = 1;

  for (let i = 0; i < levelSum.length; i++) {
    if (levelSum[i] > maxLevelSum) {
      maxLevelSum = levelSum[i];
      level = i + 1;
    }
  }

  return level;
}

// Time: O(n)
// Space: O(n)
