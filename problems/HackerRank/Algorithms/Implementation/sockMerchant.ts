function sockMerchant(n: number, ar: number[]): number {
  const counter = {} as any;

  for (let ele of ar) {
    if (!counter.hasOwnProperty(ele)) {
      counter[ele] = 1;
      continue;
    }
    counter[ele]++;
  }

  let ans = 0;

  for (let ele in counter) {
    ans += Math.floor(counter[ele] / 2);
  }

  return ans;
}
