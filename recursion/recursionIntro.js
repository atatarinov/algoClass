//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}
// whileLoop(5);

//2. Next, try looping just like above except using recursion

function recurseFromNum(n) {
  if (n <= 0) return;

  console.log(n);
  return recurseFromNum(n - 1);
}

// recurseFromNum(5);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
  let sum = base;
  let times = 1;
  while (times < expo) {
    sum *= base;
    times++;
  }
  console.log(sum);
}

// exponent(5, 3);

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.


//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.


//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
