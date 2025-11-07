function intToRoman(num: number): string {
  const dic = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  } as const;

  let _num = num;
  let digits = 1;
  let result = '';

  while (_num > 0) {
    const remainder = _num % 10;

    const value = remainder * digits;

    if (Object.keys(dic).includes(String(value))) {
      result = dic[String(value) as keyof typeof key] + result;
    } else if (remainder === 4 || remainder === 9) {
      if (digits === 1) {
        if (value === 4) {
          result = dic[1] + dic[5] + result;
        } else {
          result = dic[1] + dic[10] + result;
        }
      } else if (digits === 10) {
        if (value === 40) {
          result = dic[10] + dic[50] + result;
        } else {
          result = dic[10] + dic[100] + result;
        }
      } else if (digits == 100) {
        if (value === 400) {
          result = dic[100] + dic[500] + result;
        } else {
          result = dic[100] + dic[1000] + result;
        }
      }
    } else {
      if (digits === 1) {
        let v;
        if (value < 4) {
          v = dic[1].repeat(value);
        } else {
          v = dic[5] + dic[1].repeat(value - 5);
        }
        result = v + result;
      } else if (digits === 10) {
        let v;
        if (value < 40) {
          v = dic[10].repeat(value / digits);
        } else {
          v = dic[50] + dic[10].repeat(value / digits - 5);
        }
        result = v + result;
      } else if (digits === 100) {
        let v;
        if (value < 400) {
          v = dic[100].repeat(value / digits);
        } else {
          v = dic[500] + dic[100].repeat(value / digits - 5);
        }
        result = v + result;
      } else if (digits === 1000) {
        const v = dic[1000].repeat(value / digits);
        result = v + result;
      }
    }

    digits = digits * 10;
    _num = Math.floor(_num / 10);
  }

  return result;
}

function intToRoman2(num: number): string {
  const valueSymbols: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let res = '';

  for (let [value, symbol] of valueSymbols) {
    if (num === 0) break;

    const count = Math.floor(num / value);
    res += symbol.repeat(count);
    num -= value * count;
  }

  return res;
}
