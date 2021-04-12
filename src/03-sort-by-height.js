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
  const answer = [...arr].sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      count++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      answer.splice(i + count, 0, -1);
    }
  }
  return answer.splice(count);
}

module.exports = sortByHeight;

// console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// console.log(sortByHeight([-1, -1, -1, -1, -1]));
