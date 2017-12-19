/*

Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/
function fib(n) {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

// O(2n) => exponential


//Memoization solution
function fib2(n) {
  let memo = [];
  let result;
  if (memo[n]) return memo[n];

  if (n <= 2) result = 1;
  else result = fib2(n - 1) + fib2(n - 2);

  memo[n] = result;
  return result;
}
//Time complexity O(n)

//Bottom-Up approach
function fib3(n) {
  if (n <= 2) return 1;

  let results = [];
  results[1] = 1;
  results[2] = 1;

  for (let i = 3; i <= n; i++) {
    results[i] = results[i - 1] + results[i - 2];
  }
  return results[n];
}
//Time complexity O(n)
