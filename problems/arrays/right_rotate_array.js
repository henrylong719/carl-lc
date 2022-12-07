function rightRotate(arr, n) {
  for (let i = 0; i < n; i++) {
    const ele = arr.pop();
    arr.unshift(ele);
  }

  return arr;
}

// manual rotation
function rightRotateTwo(arr, n) {
  const result = [];

  for (let i = arr.length - n; i < arr.length; i++) {
    result.push(arr[i]);
  }

  for (let j = 0; j < arr.length - n; j++) {
    result.push(arr[j]);
  }

  return result;
}

function rightRotateThree(arr, n) {
  return arr.splice(arr.length - n).concat(arr.splice(0, arr.length));
}

const arr = [1, 2, 3, 4, 5];

console.log(rightRotateTwo(arr, 2));
