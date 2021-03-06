'use strict';
/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/
const stringReverese = (str) => {
  let newStr = '';
  if (!str.length) return newStr;

  return newStr.concat(stringReverese(str.slice(1)), str[0]);
};
