

/*
Two Sum

  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const twoSum = (nums, target) => {
  /*
    numberMap is set as a constant that stores the numbers in the array as keys
    and the indexes as value to those keys.
   */
  const numberMap = {};
  /*
    Create a for loop that iterates through the nums array
    On line 13, we subtract the value of the current itreration
    from the target and we save that to the variable
    "match", as in we are checking to see if
    there is a number in numberMap that matches this.
  */
  for (let i = 0; i < nums.length; i++) {
    const match = target - nums[i];

    if (match in numberMap) {
      /*
        If the number match is in numberMap we return
        the stored value of match and, the current index
       */
      return [numberMap[match], i];
    }
    /*
      If the number in match isn't in numberMap then
      we create new key value pair in numberMap
    */
    numberMap[nums[i]] = i;
  }
  return null;
};
