/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let answer = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (typeof matrix[i] !== 'number') {
      for (let k = 0; k < matrix[i].length; k++) {
        answer += matrix[i][k] > 0 ? matrix[i][k] : 0;
      }
    } else {
      answer += matrix[i];
    }
  }
  return answer;
}

module.exports = getMatrixElementsSum;

// console.log(
//   getMatrixElementsSum([
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
//   ]),
// );
