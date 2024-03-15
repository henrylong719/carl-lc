function matchingStrings(strings: string[], queries: string[]): number[] {
  let obj = {} as any;
  const result = [] as number[];

  for (let str of strings) {
    if (obj.hasOwnProperty(str)) {
      obj[str]++;
      continue;
    }
    obj[str] = 1;
  }

  for (let str of queries) {
    if (obj.hasOwnProperty(str)) {
      result.push(obj[str]);
      continue;
    }
    result.push(0);
  }

  return result;
}

console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));
