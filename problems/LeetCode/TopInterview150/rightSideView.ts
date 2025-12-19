function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  let queue = [root];
  const ans = [];

  while (queue.length) {
    const levelNodes = [];

    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];

      if (i === 0) {
        ans.push(node.val);
      }

      if (node.right) {
        levelNodes.push(node.right);
      }

      if (node.left) {
        levelNodes.push(node.left);
      }
    }

    queue = [...levelNodes];
  }

  return ans;
}

// Time compleity: O(n)
// Space compleixty: O(n)

function rightSideView2(root: TreeNode | null): number[] {
  if (!root) return [];

  let queue = [root];
  const ans = [];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue[i];

      if (i === 0) {
        ans.push(node.val);
      }

      if (node.right) {
        queue.push(node.right);
      }

      if (node.left) {
        queue.push(node.left);
      }
    }

    queue = queue.slice(len, queue.length);
  }

  return ans;
}

// Time compleity: O(n)
// Space compleixty: O(1)
