class MinHeap {
  constructor(parameters) {
    this.h = [];
  }

  _parent = (i) => {
    return i ? Math.floor((i - 1) / 2) : null;
  };

  peek() {
    return this.h[0];
  }

  add(x) {
    let h = this.h;
    h.push(x);

    // get last index
    let i = h.length - 1;
    let p = this._parent(i);

    // change position
    // heapify up
    while (p !== null && x < h[p]) {
      // swap
      h[i] = h[p];
      h[p] = x;
      i = p;
      p = this._parent(i);
    }
  }

  remove(x) {
    let h = this.h;
    let i;

    for (let j = 0; j < h.length; j++) {
      // find the targe element
      if (h[j] == x) {
        i = j;
      }
    }

    x = h.pop();
    // target element is the last one
    if (i == h.length) return;

    // get the last element
    h[i] = x;

    let p = this._parent(i);

    // heapify up
    while (p !== null && x < h[p]) {
      // swap
      h[i] = h[p];
      h[p] = x;
      i = p;
      p = this._parent(i);
    }

    // heapify down
    let c = this.minChild(i);
    while (c !== null && h[c] < x) {
      h[i] = h[c];
      h[c] = x;
      i = c;
      c = this.minChild(i);
    }
  }

  minChild(i) {
    let h = this.h;
    let l = i * 2 + 1;
    let r = l + 1;

    if (l >= h.length) return null;
    if (r >= h.length) return l;
    return h[l] < h[r] ? l : r;
  }
}

function processData(input) {
  let h = new MinHeap();
  let lines = input.split('\n');
  lines.shift();
  for (let l of lines) {
    let [q, p] = l.split(' ');
    if (q == 1) h.add(+p);
    else if (q == 2) h.remove(+p);
    else if (q == 3) console.log(h.peek());
  }
}
