/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let stringNum = n.toString();
  while (stringNum.length !== 1) {
    let digits = stringNum.split('');
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]);
    }
    stringNum = sum.toString();
  }
  return parseInt(stringNum);
}

module.exports = getSumOfDigits;
