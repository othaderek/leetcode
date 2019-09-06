/*
  Binary Search in JS

  My attempt at binary search from memory
  Binary search only works on sorted arrays
  This implementation will assume that the array is already sorted.

*/

const binarySearch = (array, value) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right){
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === value){
      console.log(middle);
      return middle;
    } else if (array[middle] < value) {
      left = middle + 1
    } else if (array[middle] > value) {
      right = middle - 1
    }

  }
  console.log(-1);
  return -1;
}

binarySearch([0,1,4,5,10], 5)
