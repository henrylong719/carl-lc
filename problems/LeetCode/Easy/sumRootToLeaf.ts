function sumRootToLeaf(root: TreeNode | null): number {
  const biToDec = (num: string) => {
    let dec = 0;
    for (let i = num.length - 1; i >= 0; i--) {
      if (num[i] === '0') continue;
      dec += Math.pow(2, num.length - 1 - i);
    }
    return dec;
  };

  let sum = 0;

  const dfs = (node: TreeNode | null, path: string) => {
    if (!node) return;

    path += String(node.val);

    if (!node.left && !node.right) {
      sum += biToDec(path);
      return;
    }

    dfs(node.left, path);
    dfs(node.right, path);
  };

  dfs(root, '');
  return sum;
}

function sumRootToLeaf(root: TreeNode | null): number {
  const biToDec = (bits: number[]) => {
    let dec = 0;
    for (let i = 0; i < bits.length; i++) {
      dec = dec * 2 + bits[i];
    }
    return dec;
  };

  let sum = 0;

  const dfs = (node: TreeNode | null, path: number[]) => {
    if (!node) return;

    path.push(node.val);

    if (!node.left && !node.right) {
      sum += biToDec(path);
    } else {
      dfs(node.left, path);
      dfs(node.right, path);
    }
    path.pop();
  };

  dfs(root, []);
  return sum;
}

// N = number of nodes, H = height of the tree, L = number of leaves.
// Time: O(N + L·H)
// Space: O(H)
