// recursion has performance problem
function deepClone(obj) {
    if (typeof obj !== 'object') return;
    const newObj = obj instanceof Array ? [] : {}

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
        }
    }

    return newObj;
}

const a = [function () {}, {b: function() {console.log('a')}}]

const b = deepClone(a);
b[1].b = 'b';
console.log(a);
console.log(b);




