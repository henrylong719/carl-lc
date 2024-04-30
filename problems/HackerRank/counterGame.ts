function counterGame(n: number): string {
  if (n === 1) return 'Richard';

  let counter = 0;

  while (n > 1) {
    const power = Math.log(n) / Math.log(2);
    if (Number.isInteger(power)) {
      n = n / 2;
    } else {
      n = n - Math.pow(2, Math.floor(power));
    }

    counter++;
  }

  return counter % 2 === 0 ? 'Richard' : 'Louise';
}

console.log(counterGame(576460752303423500));
