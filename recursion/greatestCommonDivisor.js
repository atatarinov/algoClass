'use strict';
/*
Write a function that takes two numbers and returns the greatest common divisor.
*/
const GCD = (a, b) => {
  if (b === 0) return a;

  return GCD(b, a % b);
};

/*
  This is the Eucledian algorithm.
*/
