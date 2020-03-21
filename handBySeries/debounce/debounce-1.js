// debounce 防抖 一段时间之后才会执行，若期间发生同样事件，会重置计算时间
// 明确函数体，知道入参是什么  和 输出是什么
function debounce(fn, wait, immediate) {
    let timer = null;
    let result = undefined;
    return function() {
        if (timer) clearTimeout(timer);

        if (immediate) {
            let canCall = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)
            if (canCall) result = fn.apply(this, arguments);
        } else {
            
            timer = setTimeout(() => {
                fn.apply(this, arguments);
            }, wait)
        }
        return result;

    }
}