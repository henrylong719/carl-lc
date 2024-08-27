import { MinHeap } from './qheapi';

function cookies(k: number, A: number[]): number {
  let heap = new MinHeap();
  let operations = 0;

  for (let ele of A) {
    heap.add(ele);
  }

  while (heap.size > 1 && heap.peek() < k) {
    const min = heap.peek();
    heap.remove();
    const min2 = heap.peek();
    heap.remove();
    const result = min + 2 * min2;
    operations++;
    heap.add(result);
  }

  return heap.peek() >= k ? operations : -1;
}

console.log(cookies(10, [1, 1, 1]));
