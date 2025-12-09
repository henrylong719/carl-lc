function simplifyPath(path: string): string {
  const stack = [];
  const pathArray = path.split('/').filter((a) => !!a && a !== '.');

  for (let p of pathArray) {
    if (p === '..') {
      stack.pop();
      continue;
    }
    stack.push(p);
  }

  return '/' + stack.join('/');
}
