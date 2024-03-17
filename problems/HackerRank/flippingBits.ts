function decToBin(n: number): string {
  const binary = [];
  let result = '';

  while (n !== 0) {
    const remainder = n % 2;
    binary.push(remainder);
    n = Math.floor(n / 2);
  }

  for (let i = binary.length - 1; i >= 0; i--) {
    result += binary[i];
  }

  if (result.length < 32) {
    const patchedDigits = 32 - result.length;

    for (let i = 0; i < patchedDigits; i++) {
      result = '0' + result;
    }
  }

  return result;
}

function flippingBits(n: number): number {
  const numberString = decToBin(n);
  let result = 0;

  for (let i = numberString.length - 1; i >= 0; i--) {
    let ele = numberString[i];
    if (ele === '1') {
      ele = '0';
    } else {
      ele = '1';
    }

    // result += +ele * 2 ** (numberString.length - 1 - i);
    result += +ele * Math.pow(2, numberString.length - 1 - i);
  }

  return result;
}

console.log(flippingBits(9));
