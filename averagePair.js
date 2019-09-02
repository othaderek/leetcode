const averagePair = (array, targetAverage) => {
  if (array.length < 2){
    console.log(false);
    return false;
  }
  let lPointer = 0; rPointer = array.length - 1;

  while (lPointer < rPointer){
    let avg = (array[lPointer] + array[rPointer]) / 2;
    if (avg === targetAverage){
      console.log(true);
      console.log(array[lPointer], array[rPointer]);
      return true;
    } else if (avg < targetAverage){
      lPointer++
    } else {
      rPointer--
    }
  }
  console.log(false);
  return false
}


averagePair([1,2,3,4,6], 3); // => true
averagePair([1,6], 3); ; // => false
averagePair([-3,-2,0,4,6,13,22], 3); ; // => false
