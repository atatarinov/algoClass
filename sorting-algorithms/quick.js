/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/

//different quicksort implementations
const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  let less = [];
  let more = [];
  let pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      more.push(arr[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(more)];
};

// average case O(n log n), worst case O(n^2)
// choosing a random pivot each time, tends to make quicksort perform at the average case

// *******************************************************
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr) => {
  let pivot = arr.length - 1;
  let i = -1;
  let j = 0;
  while (j < pivot) {

    if (arr[j] < arr[pivot]) {
      i++;
      swap(arr, i, j);
    }
    j++;
  }
  swap(arr, i + 1, pivot);

  return arr;
};
