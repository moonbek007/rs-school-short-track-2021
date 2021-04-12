/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let stop = array.length - 1;
  if (array[start] === value) {
    return start;
  } else if (array[stop] === value) {
    return stop;
  }
  let index = Math.floor((start + stop) / 2);
  while (start < stop || array[index] !== value) {
    // console.log('loop');
    if (array[index] === value) {
      return index;
    } else {
      if (value < array[index]) {
        stop = index;
        index = Math.floor((start + stop) / 2);
      } else if (value > array[index]) {
        start = index;
        index = Math.floor((start + stop) / 2);
      }
    }
  }
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === value) {
  //     return i;
  //   }
  // }
}

module.exports = findIndex;

// console.log(findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
// console.log(findIndex([1, 2, 3], 2));
