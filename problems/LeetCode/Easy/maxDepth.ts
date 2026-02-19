function maxDepth(root: _Node | null): number {
  if (!root) return 0;

  let q = [root];
  let level = 0;

  while (q.length) {
    level++;
    const next = [];
    for (const node of q) {
      for (const child of node.children) {
        next.push(child);
      }
    }
    q = next;
  }

  return level;
}
// Time: O(n)
// Space: O(w)

function maxDepth(root: _Node | null): number {
  if (!root) return 0;

  let best = 0;

  for (const child of root.children) {
    best = Math.max(best, maxDepth(child));
  }

  return 1 + best;
}

// Time: O(n)
// Space: O(h)
