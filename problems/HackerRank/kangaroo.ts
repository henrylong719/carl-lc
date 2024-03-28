function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // x1 + times*v1 = x2 + times*v2

  if (v1 === v2 && x2 !== x1) return 'NO';

  const times = (x2 - x1) / (v1 - v2);

  if (times > 0 && Number.isInteger(times)) {
    return 'YES';
  }

  return 'NO';
}

console.log(kangaroo(1, 5, 2, 2));
