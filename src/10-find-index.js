function findIndex(array, value) {
  let start = 0;
  let stop = array.length - 1;
  if (array[start] === value) {
    return start;
  }
  if (array[stop] === value) {
    return stop;
  }
  let index = Math.floor((start + stop) / 2);
  while (start < stop || array[index] !== value) {
    // console.log('loop');
    if (array[index] === value) {
      return index;
    }
    if (value < array[index]) {
      stop = index;
      index = Math.floor((start + stop) / 2);
    } else if (value > array[index]) {
      start = index;
      index = Math.floor((start + stop) / 2);
    }
  }
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === value) {
  //     return i;
  //   }
  // }
  return index;
}

module.exports = findIndex;

// console.log(findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
// console.log(findIndex([1, 2, 3], 2));
