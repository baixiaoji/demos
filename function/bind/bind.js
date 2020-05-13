const slice = Array.prototype.slice;

function _bind(asThis) {
  const fn = this;
  if (typeof fn !== 'function') {
    return Error('must need function type to call')
  }
  const args = slice.apply(arguments, 1);
  const newFn = function () {  
    return fn.apply(this instanceof newFn ? this : asThis, args.concat(slice.apply(arguments)));
  }
  
  newFn.prototype = fn.prototype;
  
  return newFn;
}

Function.prototype._bind = _bind;
module.exports = _bind;