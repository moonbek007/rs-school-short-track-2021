function getDNSStats(domains) {
  const answer = {};
  for (let i = 0; i < domains.length; i++) {
    const splitLink = domains[i].split('.');
    let reversedLink = '';
    for (let k = splitLink.length - 1; k >= 0; k--) {
      reversedLink += `.${splitLink[k]}`;
      if (answer[reversedLink] === undefined) {
        answer[reversedLink] = 1;
      } else {
        answer[reversedLink]++;
      }
    }
  }
  return answer;
}

module.exports = getDNSStats;

// console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));
// console.log(getDNSStats(['epam.com']));
// console.log(getDNSStats(['epam.com', 'info.epam.com']));
// console.log(getDNSStats([]));
