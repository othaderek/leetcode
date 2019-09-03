/*
  Is Subsequence?

  Given two strings, check if the string one is a subsequence
  of string two.

  
*/

const isSubsequence = (str1, str2) => {
  let pointer1 = 0;
  let pointer2 = 0;
  let result = "";

  while (pointer1 < str1.length){
    if (str1[pointer1] === str2[pointer2]){
      result += str2[pointer2];
      pointer1++
      pointer2++
    } else if(str1[pointer1] !== str2[pointer2]){
      pointer2++
    }
  }

  return (result === str1) ? true : false;
}

isSubsequence("sing", "string") // => true
