function countSort(arr: string[][]): void {
  const arrHalfLen = Math.ceil(arr.length / 2);
  let result = [];
  const _arr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < arrHalfLen) {
      _arr.push([arr[i][0], '-']);
      continue;
    }
    _arr.push([arr[i][0], arr[i][1]]);
  }

  _arr.sort((a: any, b: any) => a[0] - b[0]);

  for (let i = 0; i < _arr.length; i++) {
    result.push(_arr[i][1]);
  }

  console.log(result.join(' '));
}

const arr1 = [
  [0, 'ab'],
  [6, 'cd'],
  [0, 'ef'],
  [6, 'gh'],
  [4, 'ij'],
  [0, 'ab'],
  [6, 'cd'],
  [0, 'ef'],
  [6, 'gh'],
  [0, 'ij'],

  [4, 'that'],
  [3, 'be'],
  [0, 'to'],
  [1, 'be'],
  [5, 'question'],
  [1, 'or'],
  [2, 'not'],
  [4, 'is'],
  [2, 'to'],
  [4, 'the'],
];
const arr2 = [
  [1, 'e'],
  [2, 'a'],
  [1, 'b'],
  [3, 'a'],
  [4, 'f'],

  [1, 'f'],
  [2, 'a'],
  [1, 'e'],
  [1, 'b'],
  [1, 'c'],
];
countSort(arr2 as any);
