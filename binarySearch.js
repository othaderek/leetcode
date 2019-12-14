/*
  Binary Search in Javascript

  Implement Binary Search. Given a sorted array and a target
  use binary search to find target value.
*/

const binarySearch = (array, value) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right){
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === value){
      console.log(array[middle]);
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
