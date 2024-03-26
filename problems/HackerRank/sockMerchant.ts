function sockMerchant(n: number, ar: number[]): number {
  let result = 0;

  // 9
  // ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

  const obj = {} as any;

  for (let ele of ar) {
    if (obj.hasOwnProperty(ele)) {
      obj[ele]++;
      continue;
    }
    obj[ele] = 1;
  }

  for (let i in obj) {
    result += Math.floor(obj[i] / 2);
  }

  return result;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
