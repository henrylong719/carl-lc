function getSum(a: number, b: number): number {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a = (a ^ b) | 0; // sum without carry (force 32 bits)
    b = carry | 0; // carry
  }

  return a;
}
