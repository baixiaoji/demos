export default function deepClone(target) {
  if (target instanceof Object) {
    let dist;
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
