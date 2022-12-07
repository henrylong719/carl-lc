function reArrange(arr) {
  const negativeArr = [];
  const positiveArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeArr.push(arr[i]);
    } else {
      positiveArr.push(arr[i]);
    }
  }

  return [...negativeArr, ...positiveArr];
}

function reArrangeTwo(arr) {
  let leftMostPosEle = 0;
  let tmp;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i !== leftMostPosEle) {
        // change position
        tmp = arr[leftMostPosEle];
        arr[leftMostPosEle] = arr[i];
        arr[i] = tmp;
      }
      leftMostPosEle++;
    }
  }

  return arr;
}

console.log(reArrangeTwo([10, -1, 20, 4, 5, -9, -6]));
