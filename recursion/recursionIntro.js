'use strict';
//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
const whileLoop =(n) => {
  while (n > 0) {
    console.log(n);
    n--;
  }
};
// whileLoop(5);

//2. Next, try looping just like above except using recursion

const recurseFromNum = (n) => {
  if (n <= 0) return;

  console.log(n);
  return recurseFromNum(n - 1);
};

// recurseFromNum(5);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
const exponent = (base, expo) => {
  let sum = base;
  let times = 1;
  while (times < expo) {
    sum *= base;
    times++;
  }
  return sum;
};

// exponent(2, 3);

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
const exponentRec = (base, expo) => {
  if (expo <= 1) return base;

  return base * exponentRec(base, expo - 1);
};

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

const recursiveMultiplier  = (arr, num) => {
  let result = [];

  const recurse = (arr, num) => {
    if (!arr.length) return arr;

    let item = arr.shift();
    result.push(item * num);
    recurse(arr, num);
  };

  recurse(arr, num);
  return result;
};

// recursiveMultiplier([2, 4, 6], 2);

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
const recursiveReverse = (arr) => {
  let result = [];
  if (!arr.length) return result;

  return result.concat(recursiveReverse(arr.slice(1)), arr[0]);
  //it works because the fuction calls in the stack will be executed: 5,4,3,2,1
};

