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


//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function exponentRec(base, expo) {
  if (expo <= 1) return base;

  return base * exponentRec(base, expo - 1);
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
let numArr = [1, 2, 3, 4, 5];

function recursiveMultiplier(arr, num) {
  // doesn't work properly
  if (arr.length === 1) {
    arr[0] = arr[0] * num;
    return;
  }
  else {
    arr[arr.length -1] = arr[arr.length -1] * num;
    recursiveMultiplier(arr.slice(0, -1), num);
    console.log(arr)
  }
  return arr;
}

recursiveMultiplier(numArr, 2);

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr) {
  let result = [];
  if (!arr.length) return result;

  return result.concat(recursiveReverse(arr.slice(1)), arr[0]);
}

