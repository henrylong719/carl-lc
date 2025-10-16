function extraLongFactorials(n: number): void {
  let res = BigInt(1);
  for (let i = BigInt(2); i <= BigInt(n); i++) {
    res *= i;
  }

  console.log(res.toString());
}
