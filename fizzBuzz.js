/*
  FizzBuzz

  Classic FizzBuzz but we store it all in a hash!

  
*/
// const fizzBuzz = () => {
//   let fizzBuzzMap = {};

//   for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//       fizzBuzzMap[i] = "FizzBuzz!";
//     } else if (i % 3 === 0){
//       fizzBuzzMap[i] = "Fizz";
//     } else if (i % 5 === 0){
//       fizzBuzzMap[i] = "Buzz";
//     } else {
//       fizzBuzzMap[i] = i;
//     }
//   }

//   console.log(fizzBuzzMap);
// }

function fizzBuzz(n) {
  // Write your code here
  let i = 1;
  while (i <= n){
      if (i % 3 === 0 && i % 5 === 0){
          console.log("FizzBuzz");
      } else if (i % 3 === 0){
          console.log("Fizz");
      } else if (i % 5 === 0){
          console.log("Buzz");
      } else {
          console.log(i);
      }
      i++
  }
}

fizzBuzz(15);

// fizzBuzz();
