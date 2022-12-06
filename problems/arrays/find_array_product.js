function findProduct(arr) {
  let productArr = [];

  const arrProduct = arr.reduce((acc, cur) => acc * cur);

  arr.forEach((ele, index) => (productArr[index] = arrProduct / ele));

  return productArr;
}
