class BSTIterator {
  private pointer = 0;
  private inOrderTree = [];

  constructor(root: TreeNode | null) {
    this.inOrderTraverse(root);
  }

  inOrderTraverse(root: TreeNode | null): void {
    if (!root) {
      return;
    }

    this.inOrderTraverse(root.left);
    this.inOrderTree.push(root.val);
    this.inOrderTraverse(root.right);
  }

  next(): number {
    const val = this.inOrderTree[this.pointer];
    this.pointer++;
    return val;
  }

  hasNext(): boolean {
    if (this.pointer < this.inOrderTree.length) {
      return true;
    }
    return false;
  }
}

// next() O(1)
// hasNext() O(1)
// Space complexity: O(n)

class BSTIterator2 {
  private stack = [];
  private pointer = null;

  constructor(root: TreeNode | null) {
    this.pointer = root;
  }

  next(): number {
    while (this.pointer) {
      this.stack.push(this.pointer);
      this.pointer = this.pointer.left;
    }

    const n = this.stack.pop();
    this.pointer = n.right;
    return n.val;
  }

  hasNext(): boolean {
    return this.pointer || this.stack.length > 0;
  }
}

// hasNext O(1)
// Amorized time per next() O(1)
// total pushes = n total pops = n totalWork O(n)
// some calls do "extra work", but that extra work is "paid for" by the fact those
// nodes won't be pushed again later
