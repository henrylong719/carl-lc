function misereNim(s: number[]): string {
  if (Math.max(...s) === 1) {
    return s.length % 2 === 0 ? 'First' : 'Second';
  }

  const xor = s.reduce((pre, cur) => cur ^ pre);

  return xor === 0 ? 'Second' : 'First';
}
