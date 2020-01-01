// This is an example of the frequency counter pattern
// The purpose of this pattern is to count the frequency of elements in an array
// It does this by using a 'for of' loop that iterates through the given array
// In a for of loop, it takes the 'value' of 'array which is in the index position
// of the current iteration and checks to see if it is in the object map
// on line 11. This line of code creates a key of the value and assigns one to the value
// of this newly created key, OR it returns the value of the already existing key and increments
// that value by one.

const frequencyCounter = (array) => {
    let mapOfElements = {};

    for (const element of array) {
        mapOfElements[element] = (mapOfElements[element] || 0) + 1;
    }
    console.log(mapOfElements);
}



frequencyCounter([1,2,3,4,1])