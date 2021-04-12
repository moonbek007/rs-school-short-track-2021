function isMAC48Address(n) {
  const regex = /[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}/;
  return regex.test(n);
}

module.exports = isMAC48Address;

// console.log(isMAC48Address('00-1B-63-84-45-E6') === true);
// console.log(isMAC48Address('Z1-1B-63-84-45-E6') === false);
// console.log(isMAC48Address('not a MAC-48 address') === false);
// console.log(isMAC48Address('FF-FF-FF-FF-FF-FF') === true);
// console.log(isMAC48Address('G0-00-00-00-00-00') === false);
