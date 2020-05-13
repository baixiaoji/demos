// recursion has performance problem
function _deepClone(source) {
  if (source instanceof Object) {
    let dist;
    if (source instanceof Array) {
      dist = [];
    } else if (source instanceof Function) {
      dist = function() {
        return source.apply(this, arguments);
      }
    } else {
      dist = {};
    }

    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        dist[key] = _deepClone(source[key]);
      }
    }

    return dist;
  } else {
    return source;
  }


}

const a = [function () {}, {b: function() {console.log('a')}}]

const b = _deepClone(a);
b[1].b = 'b';
console.log(a);
console.log(b);




