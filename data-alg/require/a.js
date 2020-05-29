
exports.baz = 'this is a file baz';

const b = require2('b.js');
console.log('a files', JSON.stringify(b));

module.exports.foo = '333'
