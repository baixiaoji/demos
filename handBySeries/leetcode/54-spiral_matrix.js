const testArr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
function spiral_matrix(matrix) {
    const spiralArray = [];

    if (!matrix.length) {
        return spiralArray;
    }

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let dir = 'right';

    while(top <= bottom && left <= right) {
        if (dir === 'right') {
            for (let i = left; i <= right; i++) {
                spiralArray.push(matrix[top][i]);
            }

            top++;
            dir = 'down'
        } else if (dir === 'down') {
            for (let i = top; i <= bottom; i++) {
                spiralArray.push(matrix[i][right]);
            }
            right--;
            dir = 'left';
        } else  if (dir === 'left') {
            for (let i = right; i >= left; i--) {
                spiralArray.push(matrix[bottom][i]);
            }
            bottom--;
            dir = 'up';
        } else if (dir === 'up') {
            for (let i = bottom; i >= top; i--) {
                spiralArray.push(matrix[i][left]);
            }
            left++;
            dir = 'right';
        }
    }

    return spiralArray;
}

console.log(spiral_matrix(testArr))
