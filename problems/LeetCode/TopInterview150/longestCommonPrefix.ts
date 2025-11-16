function longestCommonPrefix(strs: string[]): string {
  let ans = '';

  for (let i = 0; i < strs[0].length; i++) {
    let isCommon = true;
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (!strs[j][i] || strs[j][i] !== char) {
        isCommon = false;
        return ans;
      }
    }

    if (isCommon) {
      ans += char;
    }
  }

  return ans;
}
