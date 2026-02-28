function reverseByType(s: string): string {
  const arr = s.split('');
  const special = new Set('!@#$%^&*()');

  const normals = [];
  const specials = [];

  for (const ch of arr) {
    if (special.has(ch)) {
      specials.push(ch);
      continue;
    }
    normals.push(ch);
  }

  let sp = specials.length - 1;
  let no = normals.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (special.has(arr[i])) {
      arr[i] = specials[sp--];
      continue;
    }
    arr[i] = normals[no--];
  }

  return arr.join('');
}

// Time: O(n)
// Space: O(n)
