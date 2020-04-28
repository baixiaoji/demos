function bind(asThis, ...rest) {
  const fn = this;
  if (typeof fn !== 'function') {
    throw new Error('need call by function');
  }

  const newFn = function(...args){
    return fn.apply(this instanceof newFn ? this : asThis, args.concat(rest));
  }
  newFn.prototype = fn.prototype;
  return newFn;
}

Function.prototype.bind2 = bind;
export default bind;
