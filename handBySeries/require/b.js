exports.foo = '2';

const a = require2('a.js');
console.log('b file', JSON.stringify(a));

exports.baz = 'this is b file';
