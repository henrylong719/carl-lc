function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (inorder.length) {
    const idx = inorder.indexOf(preorder.shift());
    const root = new TreeNode(inorder[idx]);

    root.left = buildTree(preorder, inorder.slice(0, idx));
    root.right = buildTree(preorder, inorder.slice(idx + 1));

    return root;
  }
  return null;
}
// Time complexity: O(n^2)
// Space complexity: O(n^2)

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  let idx = 0;

  const build = (start: number, end: number): TreeNode | null => {
    if (start > end) return null;

    const rootValue = preorder[idx++];
    const mid = map.get(rootValue);
    const root = new TreeNode(rootValue);

    root.left = build(start, mid - 1);
    root.right = build(mid + 1, end);

    return root;
  };

  return build(0, inorder.length - 1);
}

// Time O(n)
// Space O(n)
