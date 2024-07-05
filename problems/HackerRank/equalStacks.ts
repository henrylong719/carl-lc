function equalStacks(h1: number[], h2: number[], h3: number[]): number {
  const curPos = [0, 0, 0];
  const heightArr = [getHeight(h1), getHeight(h2), getHeight(h3)];

  while (heightArr[0] !== heightArr[1] || heightArr[1] !== heightArr[2]) {
    const maxHeightIndex = getMaxHeight(heightArr);

    console.log(heightArr[0], heightArr[1], heightArr[2]);

    if (maxHeightIndex === 0) {
      heightArr[maxHeightIndex] -= h1[curPos[maxHeightIndex]];
    } else if (maxHeightIndex === 1) {
      heightArr[maxHeightIndex] -= h2[curPos[maxHeightIndex]];
    } else if (maxHeightIndex === 2) {
      heightArr[maxHeightIndex] -= h3[curPos[maxHeightIndex]];
    }

    curPos[maxHeightIndex]++;
  }

  return heightArr[0];
}

function getHeight(h: number[]) {
  return h.reduce((pre, cur) => (cur += pre));
}

function getMaxHeight(arr: number[]) {
  const max = Math.max(arr[0], arr[1], arr[2]);
  for (let i = 0; i < arr.length; i++) {
    if (max === arr[i]) {
      return i;
    }
  }
  return 0;
}

console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]));
