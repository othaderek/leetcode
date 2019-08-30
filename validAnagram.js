/*
  Anagram

  Given two strings, write a function to determine if
  the second string is an anagram of the first.

*/

const validAnagram = (stringOne, stringTwo) => {
  // Create two objects containting frequency of each char
  let frequencyMap1 = {};
  let frequencyMap2 = {};

  // If stringOne length === stringTwo length and they arent exactly the same !==
  if (stringOne.length === stringTwo.length && stringOne !== stringTwo){
    // Iterate through the objects and assign them to their respective frequency counting objects
    for (let char of stringOne){
      // If key that matches the current iterated value add 1 to that value
      frequencyMap1[char] = (frequencyMap1[char] || 0) + 1
    }

    for (let char of stringTwo){
      // If key that matches the current iterated value add 1 to that value
      frequencyMap2[char] = (frequencyMap2[char] || 0) + 1
    }
  } else {
    console.log(false);
    return false
  }
  // When done, check to see if the keys and values match
  for (let key in frequencyMap1){
    if (frequencyMap2.hasOwnProperty(key) && frequencyMap1[key] === frequencyMap2[key]){
      // console.log(key, " : ", frequencyMap1[key]);
      // console.log(key, " : ", frequencyMap2[key]);
    } else {
      console.log(false);
      return false
    }
  }
  console.log(true);
  return true


}
validAnagram("rice", "icer") // => true
validAnagram("", "icer") // => false
validAnagram("12345", "54321") // true
validAnagram("oo", "icer") // false
