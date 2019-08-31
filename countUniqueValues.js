/*
  Counting Unique Values

  Given a sorted array, function counts the unique values in an array

*/


let countUniqueValues = (arr) => {
    if (arr.length === 0){
        return 0;
    }
    let left = 0, right = 1;
    while (right < arr.length){
        if (arr[left] === arr[right]){
            right++;
        } else {
            left++;
            arr[left] = arr[right];
        }
    }

    return left + 1;
};

// I used two pointers to compare the values in the array
