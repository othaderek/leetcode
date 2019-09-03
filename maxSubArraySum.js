/*
  Max SubArray Sum

  Given an array and sub array length find the largest subarray sum
  in the array and return the value.
*/

const maxSubArraySum = (array, windowSize) => {
  if (array.length < windowSize){
    return null
  }
  let left = 0;
  let right = windowSize;
  let total = 0;
  let temp = 0;

  while (right <= array.length){
    total = array.slice(left, right).reduce( (total, num) => total + num)
    if (temp < total){
      temp = total
    }
    left++
    right++
  }
  return (temp<total) ? total : temp;
}

maxSubArraySum([12,13,14], 2) // => 27
