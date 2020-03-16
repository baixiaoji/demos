const _bind = require('./bind');

function fn(a,b) {
  this.a = a;
  this.b = b;
}
const newFn = fn._bind({name: 'baixiaoji'}, 'a');
const p = new newFn('z');
console.log(p.__proto__ === fn.prototype);
