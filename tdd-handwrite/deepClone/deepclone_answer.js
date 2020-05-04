// having some drawback
// cannot copy the obj having to many nest property, which cause the stackoverflow
// the solution see  https://juejin.im/post/5bc1ae9be51d450e8b140b0c
// change recursion to loop and the implement wa difference and more complex
// how to clear the cache you can change the deepClone to the class that you can using the instance which contain itself cache weakMap
const cache = new WeakMap();
export default function deepClone(target) {
  if (target instanceof Object) {
    let dist;
    if (cache.has(target)) {
      return cache.get(target);
    }

    if (target instanceof Array) {
      dist = [];
    } else if (target instanceof Function) {
     dist = function() {
       return target.apply(this, arguments)
     }
    }else if (target instanceof Date) {
      dist = new Date(target);
    }else if (target instanceof RegExp) {
      dist = new RegExp(target.source, target.flags)
    }else {
      dist = {}
    }
    cache.set(target, dist);

    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        dist[key] = deepClone(target[key]);
      }
    }

    return dist;
  } else {
    return target;
  }
}
