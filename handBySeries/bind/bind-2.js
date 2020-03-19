const slice = String.prototype.slice;
function _bind(asThis) {
  const fn = this;
  const args = slice.call(arguments, 1);
  if (typeof fn !== 'function') {
    return TypeError('必须有函数调用');
  }
  const newFn = function () {
    const otherArgs = slice.call(arguments);
    return fn.call(this instanceof newFn ? this : asThis, args.concat(otherArgs));
  }
  newFn.prototype = fn.prototype;
  return newFn;
}

Function.prototype._bind = _bind;
module.exports = _bind;
