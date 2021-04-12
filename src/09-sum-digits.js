function getSumOfDigits(n) {
  let stringNum = n.toString();
  while (stringNum.length !== 1) {
    const digits = stringNum.split('');
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i], 10);
    }
    stringNum = sum.toString();
  }
  return parseInt(stringNum, 10);
}

module.exports = getSumOfDigits;
