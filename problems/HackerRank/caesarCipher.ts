function caesarCipher(s: string, k: number): string {
  const _k = k % 26;

  let result = '';

  for (let char of s) {
    let ascii = char.charCodeAt(0);

    let cipheredAscii = ascii + _k;

    // uppercase
    if (ascii >= 65 && ascii <= 90) {
      if (cipheredAscii > 90) {
        cipheredAscii = cipheredAscii - 26;
      }
    }

    // lowercase
    if (ascii >= 97 && ascii <= 122) {
      if (cipheredAscii > 122) {
        cipheredAscii = cipheredAscii - 26;
      }
    }

    result += String.fromCharCode(cipheredAscii);
  }

  return result;
}

console.log(caesarCipher('abc-defghijklmnopqrstuvwxyz', 3));
