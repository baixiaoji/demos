function _bind(asThis, ...arg) {
  const fn = this;
  if (typeof fn !== 'function') {
    throw TypeError('bind should call by function');
  }
  const newFn = function(...args) {
    return fn.call(this instanceof newFn ? this : asThis, ...arg, ...args);
  };
  newFn.prototype = fn.prototype;
  return newFn;
}

Function.prototype._bind = _bind;
module.exports = _bind;
