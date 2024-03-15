function convertCamelToRegular(str: string): string {
  let result = '';
  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += ' ' + char.toLowerCase();
      continue;
    }
    result += char;
  }
  return result;
}

function convertRegularToCamel(str: string): string {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === ' ') {
      result += str[i + 1].toUpperCase();
      i++;
      continue;
    }
    result += char;
  }
  return result;
}

function convert(str: string): string {
  if (!str) return '';

  let result = '';
  const type = str[0] + str[2];
  const string = str.slice(4);

  switch (type) {
    case 'SM':
      const sanitizedString = string.slice(0, string.length - 2);
      result = convertCamelToRegular(sanitizedString);
      break;
    case 'SC':
      result = convertCamelToRegular(string).trim();
      break;
    case 'SV':
      result = convertCamelToRegular(string);
      break;
    case 'CM':
      result = convertRegularToCamel(string) + '()';
      break;
    case 'CC':
      result = convertRegularToCamel(string);
      result = result[0].toUpperCase() + result.slice(1);
      break;
    case 'CV':
      result = convertRegularToCamel(string);
      break;
  }
  return result;
}
