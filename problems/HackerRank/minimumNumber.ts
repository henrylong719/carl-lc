function minimumNumber(n: number, password: string): number {
  let result = 0;

  const numbers = '0123456789';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialCharacters = '!@#$%^&*()-+';

  // numberFlag, lowerCaseFlag, upperCaseFlag,specialCharactersFlag

  let noNumber = 1;
  let noLowercase = 1;
  let noUpperCase = 1;
  let noSpecialCharacters = 1;

  for (let char of password) {
    if (numbers.includes(char)) noNumber = 0;
    if (lowerCase.includes(char)) noLowercase = 0;
    if (upperCase.includes(char)) noUpperCase = 0;
    if (specialCharacters.includes(char)) noSpecialCharacters = 0;
  }

  // get the missing required char length
  result = noNumber + noLowercase + noUpperCase + noSpecialCharacters;

  return Math.max(result, 6 - n);
}

console.log(minimumNumber(1, '1'));
