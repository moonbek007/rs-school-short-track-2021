/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let answer = {};
  for (let i = 0; i < domains.length; i++) {
    let splitLink = domains[i].split('.');
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
