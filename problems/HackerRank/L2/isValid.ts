function isValid(s: string): string {
  let obj = {} as any;

  for (let char of s) {
    if (obj.hasOwnProperty(char)) {
      obj[char]++;
      continue;
    }
    obj[char] = 1;
  }

  let max = -Infinity;
  let min = Infinity;

  let maxEle;
  let minEle;

  for (let ele in obj) {
    if (obj[ele] > max) {
      max = obj[ele];
      maxEle = ele;
    }

    if (obj[ele] < min) {
      min = obj[ele];
      minEle = ele;
    }
  }

  if (maxEle === minEle) return 'YES';

  let reduceMaxEleObj = { ...obj };
  reduceMaxEleObj[maxEle as any]--;

  let reduceMinEleObj = { ...obj };
  reduceMinEleObj[minEle as any]--;

  let maxArr = [];
  let minArr = [];

  for (let char in reduceMaxEleObj) {
    if (reduceMaxEleObj[char] !== 0) {
      maxArr.push(reduceMaxEleObj[char]);
    }
  }

  for (let char in reduceMinEleObj) {
    if (reduceMinEleObj[char] !== 0) {
      minArr.push(reduceMinEleObj[char]);
    }
  }

  if (checkAllEqual(maxArr) || checkAllEqual(minArr)) {
    return 'YES';
  }

  return 'NO';
}

function checkAllEqual(arr: number[]) {
  const allEqual = arr.every((v) => {
    return v === arr[0] || v === 0;
  });
  return allEqual;
}

function isValidTwo(s: string): string {
  let frequency = new Array(24).fill(0);

  for (let i = 0; i < s.length; i++) {
    const num = s[i].charCodeAt(0) - 97;
    frequency[num]++;
  }

  // get the max and min frequency letter
  let max = -Infinity;
  let min = Infinity;
  let maxPos;
  let minPos;

  for (let i = 0; i < frequency.length; i++) {
    const num = frequency[i];

    if (!num) continue;

    if (num > max) {
      max = num;
      maxPos = i;
    }
    if (num < min) {
      min = num;
      minPos = i;
    }
  }

  if (min === max) return 'YES';

  // max number letter frequency - 1
  const maxArr = [...frequency];
  maxArr[maxPos as number]--;

  // min number letter frequency -1
  const minArr = [...frequency];
  minArr[minPos as number]--;

  if (checkAllEqual(maxArr) || checkAllEqual(minArr)) {
    return 'YES';
  }

  return 'NO';
}

console.log(isValidTwo('b'));
