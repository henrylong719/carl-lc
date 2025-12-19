function connect(root: _Node | null): _Node | null {
  if (!root) return root;

  let queue = [];
  queue.push(root);

  while (queue.length) {
    const tmp = [];

    for (let i = 0; i < queue.length; i++) {
      if (i + 1 < queue.length) {
        queue[i].next = queue[i + 1];
      }

      if (queue[i].left) {
        tmp.push(queue[i].left);
      }

      if (queue[i].right) {
        tmp.push(queue[i].right);
      }
    }

    queue = [...tmp];
  }
  return root;
}

function connect2(root: _Node | null): _Node | null {
  if (!root) return root;

  let queue = [];
  queue.push(root);

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      if (i + 1 < len) {
        queue[i].next = queue[i + 1];
      }

      if (queue[i].left) {
        queue.push(queue[i].left);
      }

      if (queue[i].right) {
        queue.push(queue[i].right);
      }
    }

    queue = queue.slice(len, queue.length);
  }
  return root;
}

// Time complexity: O(n)
// Space compleixity: O(n)

function connect3(root: _Node | null): _Node | null {
  if (!root) return root;

  let cur = root;

  while (cur) {
    const dummy = new _Node();
    let nxt = dummy;

    while (cur) {
      if (cur.left) {
        nxt.next = cur.left;
        nxt = nxt.next;
      }

      if (cur.right) {
        nxt.next = cur.right;
        nxt = nxt.next;
      }
      // move to the right subtree
      cur = cur.next;
    }
    // move to the next level
    cur = dummy.next;
  }
  return root;
}

// Time complexity: O(n)
// Space compleixity: O(1)
