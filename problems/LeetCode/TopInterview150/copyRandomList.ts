function copyRandomList(head: _Node | null): _Node | null {
  const map = new Map<_Node, _Node>();

  let cur = head;

  while (cur) {
    map.set(cur, new _Node(cur.val));
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    const node = map.get(cur);
    node.next = map.get(cur.next) || null;
    node.random = map.get(cur.random) || null;
    cur = cur.next;
  }

  return map.get(head);
}

// time complexity: O(n)
// space complexity: O(n)
