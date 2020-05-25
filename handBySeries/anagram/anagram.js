// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
function cleanString(str) {
  return str.replace(/[^\w]/g, '').split('').sort().join('');
}

//   anagrams('Hi there', 'Bye there') --> False
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
function _anagrams(stringA, stringB) {
  const aMap = buildMap(stringA);
  const bMap = buildMap(stringB);

  if (Object.keys(aMap).length !== Object.keys(bMap).length) {
    return false;
  }

  for (let key in aMap) {
    if (aMap[key] !== bMap[key]) {
      return false;
    }
  }

  return true;
}


function buildMap(str) {
  const map = {};

  for (let char of str.replace(/[^\w]/g, '').toLocaleLowerCase()) {
    map[char] = map[char] + 1 || 1;
  }

  return map;
}
module.exports = anagrams;
