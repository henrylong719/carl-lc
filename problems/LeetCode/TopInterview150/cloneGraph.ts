function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return node;
  const map = new Map<number, _Node>();
  const stack = [node];

  while (stack.length) {
    const node = stack.pop();
    const duplicate = map.has(node.val)
      ? map.get(node.val)
      : new _Node(node.val);
    map.set(node.val, duplicate);

    if (duplicate?.neighbors?.length > 0) continue;

    for (let i = 0; i < node.neighbors.length; i++) {
      const neighbor = node.neighbors[i];
      const duplicateNeighbor = map.has(neighbor.val)
        ? map.get(neighbor.val)
        : new _Node(neighbor.val);
      map.set(neighbor.val, duplicateNeighbor);

      duplicate.neighbors.push(duplicateNeighbor);
      stack.push(neighbor);
    }
  }

  return map.get(node.val);
}

function cloneGraph2(node: _Node | null): _Node | null {
  if (!node) return node;

  const map = new Map<_Node, _Node>();
  map.set(node, new _Node(node.val));

  const stack = [node];

  while (stack.length) {
    const cur = stack.pop();
    const curClone = map.get(cur);

    for (const nei of cur.neighbors) {
      if (!map.has(nei)) {
        const neiClone = new _Node(nei.val);
        map.set(nei, neiClone);
        stack.push(nei);
      }
      curClone.neighbors.push(map.get(nei));
    }
  }

  return map.get(node);
}
