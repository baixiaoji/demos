/**
 * 
 * 假设
    addTwo 接受两个参数，
    addThree 接受三个参数，
    addFore 接受四个参数，
    请写出一个 currify 函数，使得它们分别接受 2、3、4 次参数，比如

    currify(addTwo)(1)(2) // 3
    currify(addThree)(1)(2)(3) // 6
    currify(addFore)(1)(2)(3)(4) // 10
 */
const currify = (fn, params = [])=> 
    (...rest) => 
        ((params.length + rest.length) === fn.length) ?
             fn.apply(undefined, [...params, ...rest])
             : currify(fn, [...params, ...rest]);

var addTwo = (a,b)=>a+b
var addThree = (a,b,c)=>a+b+c

var newAddTwo = currify(addTwo)
var newAddThree = currify(addThree)

console.log(newAddTwo(1)(2)) // 3
console.log(newAddThree(1)(2)(3)) // 6
