
function _bind(asThis, ...args) {
  const fn = this;
  if (typeof fn !== 'function') {
    return TypeError('必须用函数调用')
  }
  const newFn = function(...params) {
    return fn.apply(this instanceof newFn ? this : asThis, args.concat(params));
  }
  // 需要调整原型
  newFn.prototype = fn.prototype;
  return newFn;
}

Function.prototype._bind = _bind;

module.exports = _bind;