function gcdOfStrings(str1: string, str2: string): string {
  let len1 = str1.length;
  let len2 = str2.length;

  const isDivisor = (l: number) => {
    if (len1 % l !== 0 || len2 % l !== 0) return false;

    const gcd = str1.slice(0, l);

    for (let i = 0; i < len1; i += l) {
      if (!str1.startsWith(gcd, i)) return false;
    }

    for (let j = 0; j < len2; j += l) {
      if (!str2.startsWith(gcd, j)) return false;
    }

    return true;
  };

  for (let i = Math.min(len1, len2); i > 0; i--) {
    if (isDivisor(i)) return str1.slice(0, i);
  }

  return '';
}
