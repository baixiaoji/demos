// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let counter = 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result[top][i] = counter;
      counter++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {

      result[i][right] = counter;
      counter++;
    }

    right--;

    for (let i = right; i >= left; i--) {

      result[bottom][i] = counter;
      counter++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {

      result[i][left] = counter;
      counter++;
    }
    left++;
  }

  return result;
}

module.exports = matrix;
