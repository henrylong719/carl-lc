function findFirstUnique(arr) {
  let obj = {};
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      resultArr.push(arr[i]);
    } else {
      resultArr = resultArr.filter((ele) => ele !== arr[i]);
    }
  }

  return resultArr[0];
}

function findFirstUniqueTwo(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let flag = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === current && j !== i) {
        // find the identical value
        flag = true;
      }
    }

    if (!flag) {
      return current;
    }
  }
  return null;
}

console.log(findFirstUnique([4, 5, 1, 4, 0, 4]));
