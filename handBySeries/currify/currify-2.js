const  currify2 = (
    fn,
    arr = []
) => (...restArgs) =>  (
    x => x.length === fn.length ? fn.apply(null, x): currify2(fn, x)
)([...arr,...restArgs]);


function add(a ,b) {
    return a + b;
}
const currifyAdd = currify2(add);

console.log(currifyAdd.toString());

console.log(currifyAdd(2)(1));
