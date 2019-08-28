/*
  Reverse String
*/

/*
  In spite of what this is called we aren't actually reversing a string, we are reversing an array of characters,
  we are also not creating room in memory to store a reversed copy of the array but we are modifying the input array in place
*/

// Firstly, create a function. Here I'm using ES6 arrow function syntax
let reverseString = s => {
  // Next, I create a left variable and a right variable representing the beginning and end of the array
  let left = 0, right = s.length - 1;
  // This is a while loop that runs while left is less than right
  while (left < right) {
    // Saves current left value to temp
    let temp = s[left];
    // Take current right value of s and saves it in the place of the current left value
    s[left] = s[right];
    // This saves the left value into the space where the right value was, swapping them
    s[right] = temp;
    // Left increments up and right increments down
    left++;
    right--;
  }
  return s;
};

/*
  In closing, the best way to visualize this is that we are swapping left and right indexes and incrementing up on the Left
  and then incrememnting down on the right and repeating this until the value of left is no longer less than right
*/
