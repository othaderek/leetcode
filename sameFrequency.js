/*
  Same Frequency

  Write a function called same frequency. Given two positive integers
  find out if the two numbers have the same frequency of digits.

  Tip: Remember in Javascript you can interate over strings but not integers
  so turn it to tring and then use the for of loop

  Also, in the for loops for counting frequencies remember this pattern
  mapObject[i] = (mapObject[i] || 0) + 1;
  This checks if attribute exists in object and if it doesnt it adds it and sets
  it to 0 then adds one, if it does exist, it sets it to itself and adds one.
  This is why we use the || or operator.

  Finally, in the for...in loop we want to loop through one of the mapObjects and compare
  the key and check if its in the second map object, we do this with
  .hasOwnProperty(key) and then we check to see if the values of each key in each respective
  object also match.

  in a for...in loop
  remember: mapObject2.hasOwnProperty(key) && mapObject1[key] === mapObject2[key];

*/

const sameFrequency = (num1, num2) => {

  let num1Map = {}, num2Map = {}, num1Str = "", num2Str = "";

  if (num1 === num2){
    console.log(true);
    return true;
  }

  num1Str = num1.toString();
  num2Str = num2.toString();

  if (num1Str.length !== num2Str.length){
    console.log(false);
    return false;
  }

  for (i of num1Str){
    num1Map[i] = (num1Map[i] || 0) + 1;
  }
  for (i of num2Str){
    num2Map[i] = (num2Map[i] || 0) + 1;
  }

  for (key in num1Map){
    if ( num2Map.hasOwnProperty(key) && num1Map[key] === num2Map[key]){

    } else {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

sameFrequency(412324, 124234) // => true
sameFrequency(0, 124234) // => false
sameFrequency(223, 123) // => false
