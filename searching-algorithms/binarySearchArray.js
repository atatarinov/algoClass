/*
BINARY SEARCH ARRAY

*** Description

Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.

*** Exercises

Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?

Extra credit: Implement the function both iteratively and recursively.

*/

const binarySearch = (arr, val) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (val === arr[mid]) return mid;

    if (val < arr[mid]) {
      console.log(low, mid, high)
      high = mid - 1;
      mid = Math.floor((low + high) / 2);
    } else if (val > arr[mid]) {
      low = mid + 1;
      mid = Math.floor((low + high) / 2);
    }
  }
  return false;
};

// binarySearch([1,2,3,4,5,6,7,8,9], 1)

// Time complexity: O(log n)
