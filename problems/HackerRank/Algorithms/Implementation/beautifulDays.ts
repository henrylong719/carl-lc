function beautifulDays(i: number, j: number, k: number): number {
  let cnt = 0;

  for (let num = i; num <= j; num++) {
    let reversed_num = String(num).split('').reverse().join('');
    if (Math.abs(num - Number(reversed_num)) % k === 0) {
      cnt++;
    }
  }

  return cnt;
}

function reverseNumber(num: number) {
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return rev;
}

function beautifulDays2(i: number, j: number, k: number): number {
  let cnt = 0;

  for (let num = i; num <= j; num++) {
    let reversed_num = reverseNumber(num);
    if ((num - reversed_num) % k === 0) {
      cnt++;
    }
  }

  return cnt;
}
