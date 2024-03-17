function lonelyinteger(a: number[]): number {
  let obj = {} as any;
  let result = a[0];

  for (let ele of a) {
    if (!obj.hasOwnProperty(ele)) {
      obj[ele] = 1;
      continue;
    }
    obj[ele]++;
  }

  for (let ele in obj) {
    if (obj[ele] === 1) {
      result = +ele;
    }
  }
  return result;
}

function lonelyinteger_two(a: number[]): number {
  a.sort();
  for (let i = 0; i < a.length; i++) {
    if ((i === 0 || a[i] !== a[i - 1]) && a[i] !== a[i + 1]) {
      return a[i];
    }
  }
  return -1;
}

console.log(lonelyinteger_two([1, 2, 3, 4, 3, 2, 1]));
