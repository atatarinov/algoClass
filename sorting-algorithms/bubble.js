'use strict';
/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

const bubbleSort = (arr) => {
  //loop through the arr
  for (let i = 0; i < arr.length - 1; i++) {
    //loop again, each time going to 1 index less
    for (let j = 0; j < arr.length - 1 - i; j++) {
      //if the next index is larger, swap
      let temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const bubbleSort2 = (arr) => {
  let wall = arr.length - 1;
  while (wall > 0) {
    for (let i = 0; i < wall; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    wall--;
  }
  return arr;
};

// Time complexity: O(n^2)
