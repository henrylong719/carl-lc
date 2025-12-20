function averageOfLevels(root: TreeNode | null): number[] {
  let queue = [root];
  let ans = [];

  while (queue.length) {
    const len = queue.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
      const node = queue[i];
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    ans.push(sum / len);
    queue = queue.slice(len);
  }

  return ans;
}

// Time complexity: O(n)
// Space compleixty: O(w) worse case O(n)
