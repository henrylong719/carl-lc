function icecreamParlor(m: number, arr: number[]): number[] {
  let obj = {} as any;

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
  }

  for (let j = 0; j < arr.length; j++) {
    const target = m - arr[j];
    if (obj[target] && obj[target] !== j) {
      return [j + 1, obj[target] + 1];
    }
  }

  return [];
}

console.log(icecreamParlor(6, [1, 3, 4, 5, 6]));
