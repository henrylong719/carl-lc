// complexity: O(n)
function findProduct(arr) {
  let productArr = [];

  const arrProduct = arr.reduce((acc, cur) => acc * cur);
  arr.forEach((ele, index) => (productArr[index] = arrProduct / ele));

  return productArr;
}

// complexity O(n^2)

function findProductTwo(arr) {
  let result = [];
  let currentProduct;
  let leftSideProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    currentProduct = 1;

    for (let j = i + 1; j < arr.length; j++) {
      currentProduct *= arr[j];
    }

    result.push(leftSideProduct * currentProduct);

    leftSideProduct *= arr[i];
  }

  return result;
}

console.log(findProduct([2, 5, 9, 3, 6]));
