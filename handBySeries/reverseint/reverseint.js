// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const str = n + '';
//
//   const strArr = str.split('');
//
//   const numberArr = strArr.filter(item => /[1-9]/.test(item));
//
//   if (numberArr.length === strArr.length) {
//     return parseInt(numberArr.reverse().join())
//   } else {
//     const identity = strArr.shift();
//     return parseInt(identity + numberArr.reverse().join())
//   }
// }

function reverseInt(n) {
  const numberSign = Math.sign(n);
  const numberString = Math.abs(n).toString();

  return parseInt(numberString.split('').reverse().join('')) * numberSign;
}

function _reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}
module.exports = reverseInt;
