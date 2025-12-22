function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length) {
    const value = postorder.pop();
    const idx = inorder.indexOf(value);
    const root = new TreeNode(value);

    root.right = buildTree(inorder.slice(idx + 1), postorder);
    root.left = buildTree(inorder.slice(0, idx), postorder);

    return root;
  }

  return null;
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const map = new Map<number, number>();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const build = (start: number, end: number): TreeNode | null => {
    if (start > end) return null;

    const value = postorder.pop();
    const idx = map.get(value);
    const root = new TreeNode(value);

    root.right = build(idx + 1, end);
    root.left = build(start, idx - 1);

    return root;
  };

  return build(0, inorder.length - 1);
}
