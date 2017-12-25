'use strict';
/*
Write a function that takes two numbers and returns the greatest common divisor.
*/
function GCD(a, b) {
  if (b === 0) return a;

  return GCD(b, a % b);
}
