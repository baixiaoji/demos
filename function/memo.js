const memo = fn => {
    const cache = {};
    return (key) => {
        if (typeof cache[key] !== 'undefined') {
            return cache[key];
        }
        cache[key] = fn.call(undefined, key);
        return cache[key];
    }
};

const x2 = memo(x => {
    console.log("执行了一次");
    return x * 2;
});
// 第一次调用 x2(1)
console.log(x2(1)); // 打印出执行了，并且返回2
// 第二次调用 x2(1)
console.log(x2(1)); // 不打印执行，并且返回上次的结果2
// 第三次调用 x2(1)
console.log(x2(1)); // 不打印执行，并且返回上次的结果2
