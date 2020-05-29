// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split('').reverse().join('')  // #1
  // return str.split('').reduce((res, char) => char + res, '');  // #2
  let reverseStr = '';

  for (let char of str) {
    reverseStr = char + reverseStr;
  }
  return reverseStr;
}

module.exports = reverse;
