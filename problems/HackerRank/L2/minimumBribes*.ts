//www.hackerrank.com/challenges/three-month-preparation-kit-new-year-chaos/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-seven

https: function minimumBribes(queue: number[]): void {
  let bribes = 0;

  for (let i = 0; i < queue.length; i++) {
    if (queue[i] - (i + 1) > 2) {
      console.log('Too chaotic');
      return;
    }
    for (let j = Math.max(0, queue[i] - 2); j < i; j++) {
      if (queue[j] > queue[i]) {
        bribes++;
      }
    }
  }
  console.log(bribes);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
