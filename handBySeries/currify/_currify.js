function currify(fn, rest = []) {
    return function(...args) {
        if (rest.length + args.length === fn.length) {
            return fn.apply(null, rest.concat(args));
        } else {
            return currify(fn, rest.concat(args));
        }
    }
}


const _currify = (
    fn, 
    rest = []
) => (...args) => (
    x => x.length === fn.length ? fn.apply(null, x) : currify(fn, x)
)(rest.concat(args))


const add = function (a,b, c) {
    return a + b + c;
}

const currifyAdd = currify(add);
const currifyAdd_ = _currify(add);
console.log(currifyAdd(2)(1)(2));
console.log(currifyAdd_(2)(1)(2));
