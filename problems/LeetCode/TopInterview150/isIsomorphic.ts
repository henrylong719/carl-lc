function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return isValid(s, t) && isValid(t, s);
}

function isValid(s1: string, s2: string) {
  let obj = {} as Record<string, string>;

  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    const char2 = s2[i];

    if (!obj.hasOwnProperty(char1)) {
      obj[char1] = char2;
      continue;
    }

    if (obj[char1] !== char2) {
      return false;
    }
  }

  return true;
}

function isIsomorphic2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let charIndexS = {} as Record<string, number>;
  let charIndexT = {} as Record<string, number>;

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in charIndexS)) {
      charIndexS[s[i]] = i;
    }

    if (!(t[i] in charIndexT)) {
      charIndexT[t[i]] = i;
    }

    if (charIndexS[s[i]] !== charIndexT[t[i]]) {
      return false;
    }
  }
  return true;
}

// Time complexity: O(n)
// Space complexity: O(n)

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const mapS = new Map<string, string>();
  const mapT = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    let valueS = '';
    let valueT = '';

    if (mapS.has(s[i])) {
      valueS = mapS.get(s[i]);
    } else {
      mapS.set(s[i], t[i]);
    }

    if (mapT.has(t[i])) {
      valueT = mapT.get(t[i]);
    } else {
      mapT.set(t[i], s[i]);
    }

    if ((valueS || valueT) && (valueS !== t[i] || valueT !== s[i]))
      return false;
  }

  return true;
}

// Time complexity: O(n)
// Space complexity: O(n)
