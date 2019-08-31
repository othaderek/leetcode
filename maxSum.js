/*
  Max Sum

  Takes the max sum of a given n consecutive numbers in an array

*/

let maxSum = (arr, n) => {
  let maxSum = 0, tempSum = 0;
  //
  if (arr.length < n) return null;
  for (let i = 0; i < n; i++){
    maxSum += arr[i];
  }
  tempSum = maxSum
  for (let i = n; i < arr.length; i++){
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSum([1,2,3,0,0,6,4, 100, 2], 3);
