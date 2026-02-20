function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) return false;

  // [node, parent]
  let q: [TreeNode, number | null][] = [[root, null]];

  while (q.length > 0) {
    const next = [];

    let xParent = null;
    let yParent = null;

    for (const [node, parent] of q) {
      if (node.val === x) {
        xParent = parent;
      } else if (node.val === y) {
        yParent = parent;
      }

      if (node.left) {
        next.push([node.left, node.val]);
      }
      if (node.right) {
        next.push([node.right, node.val]);
      }
    }

    if (xParent !== null && yParent !== null) {
      if (xParent === null || yParent === null) return false;
      return xParent !== yParent;
    }

    q = next;
  }

  return false;
}

// Time: O(n)
// Space: O(w)

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) return false;

  let xParent = null;
  let yParent = null;
  let xLevel = -1;
  let yLevel = -1;

  const dfs = (node: TreeNode | null, parent: TreeNode, level: number) => {
    if (!node) return;

    if (node.val === x) {
      xParent = parent;
      xLevel = level;
    } else if (node.val === y) {
      yParent = parent;
      yLevel = level;
    }

    dfs(node.left, node, level + 1);
    dfs(node.right, node, level + 1);
  };

  dfs(root, null, 0);

  return xParent !== yParent && xLevel === yLevel;
}

// Time: O(n)
// Space: O(h)
