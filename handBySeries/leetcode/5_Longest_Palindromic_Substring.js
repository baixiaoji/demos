/*
* Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*
* */
/**
 * @param {string} s
 * @return {string}
 */
var _longestPalindrome = function(s) {
  let max = 0;
  let temp = '';

  function isPalindrome(str) {
    return str.split('').reverse().join('') === str;
  }

  for (let i = 0; i < s.length; i++) {

    for (let j = i; j < s.length; j++) {
      const str = s.substring(i, j + 1);

      if (isPalindrome(str) && str.length > max) {
        max = str.length;
        temp = str
      }
    }
  }

  return temp;
};






var longestPalindrome = function(s) {
  let longStr = s[0] || '';

  function expandStr(index1, index2) {

    if (index1 >= 0 && index2 < s.length && s[index1] === s[index2]) {
      expandStr(index1 - 1, index2 + 1);
    } else {
      if (index2 - index1 > longStr.length) {
        longStr = s.slice(index1 + 1, index2);
      }
    }

  }

  for (let i = 1; i < s.length; i++) {
    if (i + 1 < s.length) {
      expandStr(i - 1, i + 1);
    }

    if (s[i - 1] === s[i]) {
      expandStr(i - 1, i);
    }
  }

  return longStr;
};
