function circularArrayRotation(
  a: number[],
  k: number,
  queries: number[]
): number[] {
  let len = a.length;
  let _k = k % len;

  let l = a.slice(0, len - _k);
  let r = a.slice(len - _k);

  let arr = [...r, ...l];

  let ans = [];
  for (let i of queries) {
    ans.push(arr[i]);
  }

  return ans;
}
