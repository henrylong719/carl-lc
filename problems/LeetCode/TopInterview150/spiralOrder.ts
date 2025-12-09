function spiralOrder(matrix: number[][]): number[] {
  let bottomLeftPtr = { row: 0, col: 0 };
  let bottomRightPtr = { row: 0, col: matrix[0].length - 1 };
  let topRightPtr = { row: matrix.length - 1, col: matrix[0].length - 1 };
  let topLeftPtr = { row: matrix.length - 1, col: 0 };

  let ans = [];
  let totalLen = matrix.length * matrix[0].length;

  while (ans.length < totalLen) {
    let bottomLeft = { ...bottomLeftPtr };
    let bottomRight = { ...bottomRightPtr };
    let topRight = { ...topRightPtr };
    let topLeft = { ...topLeftPtr };

    while (bottomLeft.col <= bottomRight.col && ans.length < totalLen) {
      ans.push(matrix[bottomLeft.row][bottomLeft.col]);
      bottomLeft.col += 1;
    }

    bottomRight.row += 1;
    while (bottomRight.row <= topRight.row && ans.length < totalLen) {
      ans.push(matrix[bottomRight.row][bottomRight.col]);
      bottomRight.row += 1;
    }

    topRight.col -= 1;
    while (topRight.col >= topLeft.col && ans.length < totalLen) {
      ans.push(matrix[topRight.row][topRight.col]);
      topRight.col -= 1;
    }

    topLeft.row -= 1;
    while (topLeft.row > bottomLeft.row && ans.length < totalLen) {
      ans.push(matrix[topLeft.row][topLeft.col]);
      topLeft.row -= 1;
    }

    bottomLeftPtr = {
      row: (bottomLeftPtr.row += 1),
      col: (bottomLeftPtr.col += 1),
    };

    bottomRightPtr = {
      row: (bottomRightPtr.row += 1),
      col: (bottomRightPtr.col -= 1),
    };

    topRightPtr = {
      row: (topRightPtr.row -= 1),
      col: (topRightPtr.col -= 1),
    };

    topLeftPtr = {
      row: (topLeftPtr.row -= 1),
      col: (topLeftPtr.col += 1),
    };
  }

  return ans;
}

spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
