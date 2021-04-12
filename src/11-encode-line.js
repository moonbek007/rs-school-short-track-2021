function encodeLine(str) {
  let answer = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      if (count === 1) {
        answer += str[i];
      } else {
        answer += `${count}${str[i]}`;
      }
      count = 1;
    }
  }
  return answer;
  // let letters = '';
  // let letterCount = {};
  // for (let i = 0; i < str.length; i++) {
  //   if (letterCount[str[i]] === undefined) {
  //     letterCount[str[i]] = 1;
  //     letters += str[i];
  //   } else {
  //     letterCount[str[i]]++;
  //   }
  // }
  // for (let i = 0; i < letters.length; i++) {
  //   if (letterCount[letters[i]] === 1) {
  //     answer += letters[i];
  //   } else {
  //     answer += `${letterCount[letters[i]]}${letters[i]}`;
  //   }
  // }
  // return answer;
}

module.exports = encodeLine;

// console.log(encodeLine('aabbbc'));
// console.log(encodeLine('aaaatttt'));
// console.log(encodeLine('aabbccc'));
// console.log(encodeLine('abbcca'));
// console.log(encodeLine('xyz'));
// console.log(encodeLine(''));
