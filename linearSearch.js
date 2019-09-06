/*

  Linear Search

  Given an array and a target, perform linear search
  to check if the given target is in the array
  If target number in array return the index of the number
  Else, return -1.

*/

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++){
    if (array[i] === target){
      return i;
    }
  }
  return -1;
}
