/*
  sumZero

  Given a sorted array, check if any two numbers in the array
  have a sum of zero.

*/

let sumZero = (arr) => {
    let left = 0;
    let right = arr.length -1;

    while (left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0){
            right--
        } else {
            left++
        }
    }
}
