const currify = (
    fn, 
    arr = []
) => (...args) => {
    if (args.length + arr.length === fn.length) {
        return fn(...args, ...arr);
    } else {
        return currify(fn, [...arr, ...args]);
    }
}


// inspired by compostion softwave
const currify2 = (
    fn, 
    arr = []
) => (...args) => (
    a => a.length === fn.length ? fn(...a) : currify2(fn, a)
)([...arr, ...args])