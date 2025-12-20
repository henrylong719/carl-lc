function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  let queue: TreeNode[] = [root];
  const ans: number[] = [];

  while (queue.length) {
    const nextLevelNodes: TreeNode[] = [];

    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];

      // first node in this level (because we traverse right-to-left)
      if (i === 0) {
        ans.push(node.val);
      }

      if (node.right) {
        nextLevelNodes.push(node.right);
      }

      if (node.left) {
        nextLevelNodes.push(node.left);
      }
    }

    queue = nextLevelNodes;
  }

  return ans;
}

/**
 * BFS (version B): single queue + level boundary (less allocation / typically better space in practice)
 */
function rightSideView_BFS_SingleQueue(root: TreeNode | null): number[] {
  if (!root) return [];

  let queue: TreeNode[] = [root];
  const ans: number[] = [];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue[i];

      // first node in this level (because we traverse right-to-left)
      if (i === 0) ans.push(node.val);

      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }

    // remove the nodes we just processed
    queue = queue.slice(len);
  }

  return ans;
}

// Time complexity: O(n)
// Space complexity: O(w), worse case O(n)

/**
 * DFS: right-first preorder
 */
function rightSideView_DFS(root: TreeNode | null): number[] {
  const ans: number[] = [];

  const dfs = (node: TreeNode | null, level: number) => {
    if (!node) return;

    // first time reaching this level => rightmost node
    if (ans.length === level) ans.push(node.val);

    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  };

  dfs(root, 0);
  return ans;
}

// Time complexity: O(n)
// Space complexity: O(h), worse case O(n)
