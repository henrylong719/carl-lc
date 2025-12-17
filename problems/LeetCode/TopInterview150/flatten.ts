function dfs(root: TreeNode, arr: number[]): void {
  if (!root) {
    return;
  }
  arr.push(root.val);
  dfs(root.left, arr);
  dfs(root.right, arr);
}

function flatten(root: TreeNode | null): void {
  if (!root) return;

  const arr = [] as number[];
  dfs(root, arr);

  for (let i = 1; i < arr.length; i++) {
    root.right = new TreeNode(arr[i]);
    root.left = null;
    root = root.right;
  }
}

// Time complexity: O(n)
// Space complexity: O(n)

function dfs(root: TreeNode | null, prev: { state: TreeNode | null }) {
  if (!root) {
    return;
  }

  dfs(root.right, prev);
  dfs(root.left, prev);

  root.right = prev.state;
  root.left = null;
  prev.state = root;
}

function flatten(root: TreeNode | null): void {
  if (!root) return;

  const prev = { state: null };

  dfs(root, prev);
}

// Time complexity: O(n)
// Space complexity: O(h)
