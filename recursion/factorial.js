'use strict';
/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/
const factorial = (n) => {
  if (n < 2) return 1;

  return n * factorial(n - 1);
};
