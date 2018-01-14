'use strict';
/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

const flatten = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
      /* ^ this is necessary as Array.concat returns a new copy of the original array,
      so the value needs to be saved. */
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
