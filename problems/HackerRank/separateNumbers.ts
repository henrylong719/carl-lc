function separateNumbers(s: string): void {
  if (s.length === 1) {
    console.log('NO');
    return;
  }
  let substring = '';

  for (let digit = 1; digit <= s.length / 2; digit++) {
    let substring = s.substring(0, digit);
    let num = BigInt(substring);
    let validString = substring;

    while (validString.length < s.length) {
      num++;
      console.log('num+', num);
      validString += String(num);
    }

    if (validString === s) {
      console.log('YES', substring);
      return;
    }
  }
  console.log('NO');
}

separateNumbers('90071992547409929007199254740993');

console.log('heyyyyy', 9007199254740992 + 1);
