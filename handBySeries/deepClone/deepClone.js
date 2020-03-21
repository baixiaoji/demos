
// recursion has performance problem
function deepClone(obj) {
    if (typeof obj !== 'object') return;
    const newObj = obj instanceof Array ? [] : {}
    // 存在 原型链上出现了可枚举属性同样会出现在这次循环中
    for (const key in obj) {
        // 检查当前属性是否当前对象拥有属性  和 Object.keys 获取是一致的
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




