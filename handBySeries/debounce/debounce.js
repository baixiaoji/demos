// debounce 防抖 一段时间之后才会执行，若期间发生同样事件，会重置计算时间
// 明确函数体，知道入参是什么  和 输出是什么
function debounce(fn, wait, immediate) {
    const timer = null;
    return function () {
        const result = undefined;
        const self = this;
        if (timer) clearTimeout(timer);
        if (immediate) {
            const canInvoke = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)
            if (canInvoke) result = fn.apply(self, arguments);
        } else {
            timer = setTimeout(() => {
                fn.apply(self, arguments);
            }, wait)
        }
        return result;
    }
}