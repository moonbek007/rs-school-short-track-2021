function deleteDigit(n) {
  const numbers = [];
  const stringNum = n.toString();
  for (let i = 0; i < stringNum.length; i++) {
    if (i + 1 === stringNum.length) {
      numbers.push(parseInt(stringNum.substring(0, i), 10));
    } else {
      numbers.push(
        parseInt(stringNum.substring(0, i) + stringNum.substring(i + 1), 10),
      );
    }
  }
  return Math.max(...numbers);
}

module.exports = deleteDigit;
