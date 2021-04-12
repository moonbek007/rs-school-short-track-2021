/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let answer = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      answer.splice(i, 0, -1);
      answer.shift();
    }
  }
  return answer;
}

module.exports = sortByHeight;

// console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// console.log(sortByHeight([-1, -1, -1, -1, -1]));
