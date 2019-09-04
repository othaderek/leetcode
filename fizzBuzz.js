
const fizzBuzz = () => {
  let fizzBuzzMap = {};

  for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
      fizzBuzzMap[i] = "FizzBuzz!";
    } else if (i % 3 === 0){
      fizzBuzzMap[i] = "Fizz";
    } else if (i % 5 === 0){
      fizzBuzzMap[i] = "Buzz";
    } else {
      fizzBuzzMap[i] = i;
    }
  }

  console.log(fizzBuzzMap);
}

fizzBuzz();
