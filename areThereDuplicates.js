/*
  Are There Duplicates?

  This is a function that takes any number of arguments and checks if
  any of them are duplicates, i decided to use the frequency counter method
  where we create a object map and tally the arguments in There
  I also learned there is an arguments objec that comes with function, but it doesn't
  work with arrow functions. This is my solution

  Time Complexity: O(n)
  Space Complexity: O(n)
*/


function areThereDuplicates() {
  let pointer = 0, map = {};
  for (pointer; pointer < arguments.length; pointer++){
      map[arguments[pointer]] = (map[arguments[pointer]] || 0) + 1;
  }
  for (key in map){
      if (map[key] > 1){
          return true
      }
  }
  return false

}
