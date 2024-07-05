function processData(input) {
  input = input.split('\n');
  let str = '';
  let lastStateOfS = [str];

  for (let i = 1; i < input.length; i++) {
    let query = input[i].split(' ');

    if (query[0] === '1') {
      // Append string
      str += query[1];
      lastStateOfS.push(str);
    } else if (query[0] === '2') {
      // delete the last k characters of s
      //abcdef 5
      str = str.substring(0, str.length - +query[1]);
      lastStateOfS.push(str);
    } else if (query[0] === '3') {
      // print the kth character of s
      console.log(str[+query[1] - 1]);
    } else {
      lastStateOfS.pop();
      str = lastStateOfS[lastStateOfS.length - 1];
    }
  }

  return str;
}
