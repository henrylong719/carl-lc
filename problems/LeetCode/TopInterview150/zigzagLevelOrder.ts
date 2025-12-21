function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  let queue = [root];
  const ans = [];

  while (queue.length) {
    const sameLevel = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue[i];
      sameLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (ans.length % 2 !== 0) {
      sameLevel.reverse();
    }

    queue = queue.slice(len);
    ans.push(sameLevel);
  }

  return ans;
}

// Time compleixty: O(n)
// Space comlexity: O(w) excluding output
