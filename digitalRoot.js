/*
  Sum of Digits or Digital root

  Write a function that will take a number (n)
  and if it is over 1 digit in length
  add each digit until there is only one digit left
  and then return the digit.
*/


const digital_root = (n) => {

  let numberString = "";
  let numStrArr = [];
  let new_arr = [];
  let result = 0;
  // convert integer to string
  numberString = n.toString();
  // Check if length of string is greater than 1
  if (numberString.length > 1){
    // If string length longer than 1 split into an array
    // Convert each value of array back into integer
    numStrArr = numberString.split("")
    numStrArr = numStrArr.map( char => new_arr.push(Number(char)))
    // use reduce to add each number in the array
    result = new_arr.reduce( (total, num) => total + num)
    // Pass the sum into digital root recursively
    return digital_root(result)
  } else{
    // If string length === 1 convert back into integer and then return value
    // return Number(numberString)
    return Number(numberString);
  }
}

digital_root(11) // => 2
