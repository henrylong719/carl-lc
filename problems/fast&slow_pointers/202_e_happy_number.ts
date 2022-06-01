function isHappy(n: number): boolean {
  let obj = {} as any;

  let result = separateNumberSquareSum(n);

  while (result !== 1) {
    if (!(result in obj)) obj[result] = 0;

    obj[result]++;

    result = separateNumberSquareSum(result);

    if (obj[result] === 2) return false;
  }

  return true;
}

function separateNumberSquareSum(n: number) {
  let result = 0;
  String(n)
    .split('')
    .map((n) => {
      result += Number(n) * Number(n);
    });

  return result;
}

console.log(isHappy(12));
