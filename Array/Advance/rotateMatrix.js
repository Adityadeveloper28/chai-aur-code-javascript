///rotate the matrix
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("matrix lenght", arr.length);

function rotate(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      const temp = matrix[i][j];
      // console.log(temp)
      matrix[i][j] = matrix[n - j - 1][i];
      // console.log(matrix[n - j - 1][i]);
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
  return matrix;
}

console.log(rotate(arr));

///2nd logic

function logic2rotate(matrix) {
  const n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

console.log(logic2rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
