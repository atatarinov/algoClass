'use strict';

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// O(2n) => exponential
//O(2^n) and O(n) space


//Memoization solution (this solution counts 0 as the fitst Fib number)
const fib2 = (n, memoize = {1: 0, 2: 1}) => {

  if (n in memoize) return memoize[n];

  let result = fib2(n - 1) + fib2(n - 2);
  memoize[n] = result;

  return result;
};
//Time complexity O(n), space O(n)

//Bottom-Up approach
const fib3 = (n) => {
  if (n <= 2) return 1;

  let results = [];
  results[1] = 1;
  results[2] = 1;

  for (let i = 3; i <= n; i++) {
    results[i] = results[i - 1] + results[i - 2];
  }
  return results[n];
};
//Time complexity O(n)

/****Optimal Space and Time Complexity***
  O(n) Time and O(1) Space             */

const fib4 = (n) => {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    let nextNum = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextNum;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
};
