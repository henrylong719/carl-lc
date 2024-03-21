function pangrams(s: string): string {
  // Write your code here
  const alphabet = {} as any;

  // build an object with 26 alphabets
  for (let i = 97; i < 123; i++) {
    const letter = String.fromCharCode(i);
    alphabet[letter] = 1;
  }

  // reduce letter counter
  for (let char of s) {
    const lowCase = char.toLowerCase();
    if (alphabet.hasOwnProperty(lowCase)) {
      alphabet[lowCase]--;
    }
  }

  for (let ele in alphabet) {
    if (alphabet[ele] > 0) {
      return 'not pangram';
    }
  }

  return 'pangram';
}

console.log(
  pangrams('We promptly judged antique ivory buckles for the next prize')
);
