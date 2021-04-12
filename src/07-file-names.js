function renameFiles(names) {
  const answer = [];
  const foundNames = {};
  for (let i = 0; i < names.length; i++) {
    if (foundNames[names[i]] === undefined) {
      answer.push(names[i]);
      foundNames[names[i]] = 0;
      foundNames[`${names[i]}(1)`] = 0;
    } else {
      foundNames[names[i]]++;
      foundNames[`${names[i]}(${foundNames[names[i]]})`] = 0;
      answer.push(`${names[i]}(${foundNames[names[i]]})`);
    }
  }
  return answer;
}

module.exports = renameFiles;

// console.log(
//   JSON.stringify(renameFiles(['file', 'file', 'image', 'file(1)', 'file'])) ===
//     JSON.stringify(['file', 'file(1)', 'image', 'file(1)(1)', 'file(2)'])
// );
// console.log(renameFiles(['file', 'file', 'image', 'file(1)', 'file']));
// console.log(
//   JSON.stringify(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])) ===
//     JSON.stringify(['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)'])
// );
// console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));
// console.log(
//   JSON.stringify(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)'])) ===
//     JSON.stringify(['a', 'b', 'cd', 'b ', 'a(3)'])
// );
// console.log(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']));
