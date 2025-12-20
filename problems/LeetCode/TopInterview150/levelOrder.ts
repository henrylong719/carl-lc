function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  let queue = [root];
  let ans = [];

  while (queue.length) {
    let len = queue.length;
    const levelNodes = [];

    for (let i = 0; i < len; i++) {
      const node = queue[i];
      levelNodes.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    ans.push(levelNodes);
    queue = queue.slice(len);
  }

  return ans;
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  let queue = [root];
  let ans = [];
  let head = 0;

  while (head < queue.length) {
    const levelEnd = queue.length;
    const level: number[] = [];
    while (head < levelEnd) {
      level.push(queue[head].val);
      if (queue[head].left) queue.push(queue[head].left);
      if (queue[head].right) queue.push(queue[head].right);
      head++;
    }
    ans.push(level);
  }

  return ans;
}

// Time complexity: O(n)
// Space complexity: O(n)
