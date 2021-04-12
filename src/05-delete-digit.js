/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = [];
  let stringNum = n.toString();
  for (let i = 0; i < stringNum.length; i++) {
    if (i + 1 === stringNum.length) {
      numbers.push(parseInt(stringNum.substring(0, i)));
      continue;
    }
    numbers.push(
      parseInt(stringNum.substring(0, i) + stringNum.substring(i + 1))
    );
  }
  return Math.max(...numbers);
}

module.exports = deleteDigit;
