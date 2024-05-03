function pylons(k: number, arr: number[]): number {
  // k = 3
  // arr = [0,1,1,1,0,0,0]
  // -1
  // k = 2
  // arr = [0,1,1,1,1,0]
  // 2
  // k = 2
  // arr = [0,1,1,0,0,0,0,1,1]
  // -1
  // k = 3
  // arr = [0,1,1,1,0,0,0]
  // -1
  // k = 3
  // arr = [0,1,1,1,0,0]
  // 2

  // let i = 0;
  // let count = 0;

  // while (i < arr.length) {
  //   let j = i + k - 1;
  //   while (j > i - k) {
  //     if (arr[j] == 1) {
  //       count++;
  //       i = j + k;
  //       break;
  //     }
  //     j--;
  //     if (j == i - k) j--;
  //   }
  //   if (j < i - k) return -1;
  // }
  return 0;
}
