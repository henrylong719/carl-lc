export function isHappy(n: number): boolean {
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

// console.log(isHappy(12));

// use fast slow pointer
function isHappyFastSlowPointer(n: number): boolean {
  let slow = n;
  let fast = n;

  while (true) {
    slow = find_square_sum(slow);
    fast = find_square_sum(find_square_sum(fast));
    if (slow === fast) {
      break;
    }
  }

  return slow === 1;
}

function find_square_sum(num: number): number {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(isHappyFastSlowPointer(12));
