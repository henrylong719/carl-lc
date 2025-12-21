function kthSmallest(root: TreeNode | null, k: number): number {
  let ans = 0;

  const dfs = (root: TreeNode | null) => {
    if (!root) return;
    dfs(root.left);
    k--;
    if (k === 0) {
      ans = root.val;
      return;
    }
    dfs(root.right);
  };

  dfs(root);
  return ans;
}

// Time complexity O(h + k)
// You visit:
// the nodes along the path down to the leftmost area: about O(h)
// plus the next k visited nodes in sorted order: about O(k)
// worst case k = n;

// Space complexity: O(h)

class SizeNode {
  val: number;
  size: number = 1; // subtree size including this node
  left: SizeNode | null = null;
  right: SizeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

class SizeBST {
  root: SizeNode | null = null;

  private getSize(n: SizeNode | null): number {
    return n ? n.size : 0;
  }

  private update(n: SizeNode): void {
    n.size = 1 + this.getSize(n.left) + this.getSize(n.right);
  }

  // Insert (no duplicates; you can decide how to handle duplicates)
  insert(x: number): void {
    this.root = this._insert(this.root, x);
  }

  private _insert(node: SizeNode | null, x: number): SizeNode {
    if (!node) return new SizeNode(x);

    if (x < node.val) node.left = this._insert(node.left, x);
    else if (x > node.val) node.right = this._insert(node.right, x);
    // else: ignore duplicates (or handle differently)

    this.update(node);
    return node;
  }

  // Delete one value
  delete(x: number): void {
    this.root = this._delete(this.root, x);
  }

  private _delete(node: SizeNode | null, x: number): SizeNode | null {
    if (!node) return null;

    if (x < node.val) {
      node.left = this._delete(node.left, x);
    } else if (x > node.val) {
      node.right = this._delete(node.right, x);
    } else {
      // found node to delete
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // replace with inorder successor (min in right subtree)
      const successor = this._minNode(node.right);
      node.val = successor.val;
      node.right = this._delete(node.right, successor.val);
    }

    this.update(node);
    return node;
  }

  private _minNode(node: SizeNode): SizeNode {
    let cur: SizeNode = node;
    while (cur.left) cur = cur.left;
    return cur;
  }

  // 1-indexed kth smallest
  kthSmallest(k: number): number {
    const total = this.getSize(this.root);
    if (k < 1 || k > total) throw new Error(`k out of range (1..${total})`);

    let cur = this.root!;
    while (cur) {
      const leftSize = this.getSize(cur.left);

      if (k <= leftSize) {
        cur = cur.left!;
      } else if (k === leftSize + 1) {
        return cur.val;
      } else {
        k -= leftSize + 1;
        cur = cur.right!;
      }
    }

    throw new Error('Unreachable');
  }
}

// ---- Example ----
const bst = new SizeBST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);

console.log(bst.kthSmallest(1)); // 2
console.log(bst.kthSmallest(3)); // 4

bst.delete(3);
console.log(bst.kthSmallest(2)); // 4
