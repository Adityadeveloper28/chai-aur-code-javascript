const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function spiralOrder(matrix) {
  const result = [];
  if (matrix.length === 0) return result;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right along the top row
    for (i = left; i <= right; i++) {
      result.push(matrix[top][i]);
      console.log(matrix[top][i]);
    }
    top++;

    ////right me hi top to bottom
    for (i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
      console.log(matrix[i][right]);
    }
    right--;
    ///bottm me right to left
    if (top <= bottom) {
      for (i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
        console.log(matrix[bottom][i]);
      }
      bottom--;
    }
    ///left mr bootm to top
    if (left <= right) {
      for (i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
        console.log(matrix[i][left]);
      }
      left++
    }
  }
   return result
}
// Example
console.log(spiralOrder(arr)); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
