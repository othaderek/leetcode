const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(5); // => 120
