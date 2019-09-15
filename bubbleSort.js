/*
  Bubble Sort

  Here is a basic implementation of Bubble Sort.
  Basically, bubble sort is a sorting algorithm that
  compares index values in an array and swaps them until
  the array is sorted.
*/

const bubbleSort = (array) => {
  let noSwaps;
  // 
  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };
  for (let i = array.length; i > 0; i--){
    noSwaps = true;
    for (let j = 0; j < i - 1; j++){
      if (array[j] > array[j + 1]){
        swap(array, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log(array);
  return array;
}

bubbleSort([4,21,3,2,15,9])
