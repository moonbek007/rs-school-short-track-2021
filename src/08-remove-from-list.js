function removeKFromList(list, k) {
  const l = [...list];
  const value = l[k];
  const newList = [];
  for (let i = 0; i < l.length; i++) {
    if (l[i].value === value) {
      if (i === 0) {
        l[i].next = null;
      } else if (i + 1 === l.length) {
        l[i - 1].next = null;
      } else {
        l[i - 1].next = l[i].next;
      }
    }
  }
  for (let i = 0; i < l.length; i++) {
    if (l[i].value !== value) {
      newList.push(l[i]);
    }
  }
  return newList;
}

module.exports = removeKFromList;
