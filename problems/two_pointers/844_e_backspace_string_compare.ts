function backspaceCompare(s: string, t: string): boolean {
  let sResultStr = '';
  let tResultStr = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') {
      sResultStr += s[i];
    } else {
      sResultStr = sResultStr.slice(0, -1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== '#') {
      tResultStr += t[i];
    } else {
      tResultStr = tResultStr.slice(0, -1);
    }
  }

  console.log(sResultStr);
  console.log(tResultStr);

  return sResultStr === tResultStr;
}

// Input: s="xy#z", t="xyz#"

function backspaceCompareTwo(s: string, t: string): boolean {
  let index1 = s.length - 1;
  let index2 = t.length - 1;

  while (index1 >= 0 || index2 >= 0) {
    let i1 = get_next_valid_char_index(s, index1);
    let i2 = get_next_valid_char_index(t, index2);

    if (i1 < 0 && i2 < 0) {
      return true;
    } else if (i1 < 0 || i2 < 0) {
      return false;
    } else if (s[i1] !== t[i2]) {
      return false;
    }

    index1 = i1 - 1;
    index2 = i2 - 1;
  }

  return true;
}

function get_next_valid_char_index(str: string, index: number) {
  let backspaceNumber = 0;

  while (index >= 0) {
    if (str[index] === '#') {
      backspaceNumber++;
    } else if (backspaceNumber > 0) {
      backspaceNumber--;
    } else {
      break;
    }
    index--;
  }
  return index;
}

console.log(backspaceCompareTwo('xywrrmp', 'xywrrmu#p'));
