const currify = (
    fn,
    arr = []
) => (...args) => arr.length + args.length === fn.length ? fn.apply(null, arr.concat(args)) : currify(fn, arr.concat(args));


const currify2 = (
    fn,
    arr = []
) => (...args) => (
    x => x.length === fn.length ? fn.apply(null, x): currify2(fn, x)
)(arr.concat(args))

const add = function (a,b) {
    return a + b;
}

const currifyAdd = currify2(add);
console.log(currifyAdd(2)(1));
