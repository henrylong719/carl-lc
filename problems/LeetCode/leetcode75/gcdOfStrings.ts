function gcdOfStrings(str1: string, str2: string): string {
  let prefix = '';

  if (str1.length < str2.length) {
    prefix = str1;
  } else {
    prefix = str2;
  }

  let isValid = true;

  while (prefix.length > 0) {
    for (
      let i = 0;
      i < Math.max(str1.length, str2.length);
      i += prefix.length
    ) {
      if (i < str1.length) {
        const subStr = str1.slice(i, i + prefix.length);
        if (subStr !== prefix) {
          isValid = false;
          break;
        }
      }

      if (i < str2.length) {
        const subStr = str2.slice(i, i + prefix.length);
        if (subStr !== prefix) {
          isValid = false;
          break;
        }
      }
    }

    if (isValid) {
      return prefix;
    } else {
      isValid = true;
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }

  return '';
}

function gcdOfStrings(str1: string, str2: string): string {
  const len1 = str1.length;
  const len2 = str2.length;

  const isDivisor = (l: number) => {
    if (len1 % l !== 0 || len2 % l !== 0) return false;

    let t1 = len1 / l;
    let t2 = len2 / l;

    let prefix = str1.slice(0, l);

    if (prefix.repeat(t1) === str1 && prefix.repeat(t2) === str2) {
      return true;
    }

    return false;
  };

  for (let i = Math.min(len1, len2); i > 0; i--) {
    if (isDivisor(i)) {
      return str1.slice(0, i);
    }
  }

  return '';
}

function gcdOfStrings(str1: string, str2: string): string {
  let len1 = str1.length;
  let len2 = str2.length;

  const isDivisor = (l: number) => {
    if (len1 % l !== 0 || len2 % l !== 0) return false;

    const prefix = str1.slice(0, l);

    for (let i = 0; i < str1.length; i += prefix.length) {
      if (!str1.startsWith(prefix, i)) return false;
    }

    for (let i = 0; i < str2.length; i += prefix.length) {
      if (!str2.startsWith(prefix, i)) return false;
    }

    return true;
  };

  for (let i = Math.min(len1, len2); i > 0; i--) {
    if (isDivisor(i)) return str1.slice(0, i);
  }

  return '';
}
