// brutal way
// 2147483646
export function isHappyNumber(n: number) {
  let obj = {} as any;

  let result = separateNumberAndSumSquare(n);

  while (result !== 1) {
    // check if it's already record in the obj
    if (!(result in obj)) obj[result] = 0;

    obj[result]++;

    result = separateNumberAndSumSquare(result);

    if (obj[result] === 2) {
      return false;
    }
  }

  return true;
}

function separateNumberAndSumSquare(n: number) {
  let result = 0;

  String(n)
    .split('')
    .map((s) => {
      result += Number(s) * Number(s);
    });

  return result;
}

console.log(isHappyNumber(19));

export function isHappyNumberDoublePointer(n: number) {
  let slow = n;
  let fast = n;

  while (true) {
    slow = findSquareSum(slow);
    fast = findSquareSum(findSquareSum(fast));

    if (fast === slow) {
      break;
    }
  }

  return slow === 1;
}

function findSquareSum(n: number) {
  let sum = 0;

  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }

  return sum;
}
