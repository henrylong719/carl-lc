function reverseBits(n: number): number {
  const binary = DecToBi(n);
  const res = biToDec(binary);
  return res;
}

function biToDec(n: string): number {
  let res = 0;
  const len = n.length;

  for (let i = len - 1; i >= 0; i--) {
    if (n[i] === '0') continue;
    res += Math.pow(2, len - 1 - i);
  }

  return res;
}

function DecToBi(n: number): string {
  let res = '';

  while (n > 0) {
    res = res + (n % 2);
    n = Math.floor(n / 2);
  }

  if (res.length < 32) {
    let need = 32 - res.length;
    while (need > 0) {
      res += '0';
      need--;
    }
  }

  return res;
}
