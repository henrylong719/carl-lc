const smallest_subarray_sum = function (s: number, arr: number[]): number {
  let min_length = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let acc = 0;
    let counter = 0;

    for (let j = i; j < arr.length; j++) {
      counter++;
      acc = acc + arr[j];

      if (acc >= s) {
        if (counter < min_length) {
          min_length = counter;
        }
        break;
      }
    }
  }
  return min_length;
};

const smallest_subarray_sum_with_slide_window = (
  s: number,
  arr: number[]
): number => {
  let min_length = Infinity;
  let window_sum = 0;
  let window_start = 0;

  for (let window_end = 0; window_end < arr.length; window_end++) {
    window_sum += arr[window_end];

    while (window_sum >= s) {
      min_length = Math.min(window_end + 1 - window_start, min_length);
      window_sum -= arr[window_start];
      window_start++;
    }
  }

  if (min_length === Infinity) {
    return 0;
  }

  return min_length;
};

let arr = [2, 1, 5, 2, 3, 2];
let s = 7;

console.log(smallest_subarray_sum(7, arr));

export {};
