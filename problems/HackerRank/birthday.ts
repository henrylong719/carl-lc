function birthday(s: number[], d: number, m: number): number {
  let window_size = m;
  let window_start = 0;
  let window_sum = 0;
  let result = 0;

  for (let window_end = 0; window_end < s.length; window_end++) {
    window_sum += s[window_end];

    if (window_end - window_start === window_size - 1) {
      if (window_sum === d) {
        result++;
      }

      // remove element outside window
      window_sum -= s[window_start];

      // move window start forward
      window_start++;
    }
  }

  return result;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
