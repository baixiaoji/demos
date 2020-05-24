// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};

  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }

  let max = 0;
  let key = '';

  Object.keys(map).forEach(item => {
    if (map[item] > max) {
      max = map[item];
      key = item;
    }
  })

  return key;
}

module.exports = maxChar;
