function throttle(fn, wait) {
    let timer = null;
    return function(...rest) {
        if (timer) return;

        timer = setTimeout(() => {
            fn.apply(this, rest)
            timer = null;
        }, wait)
    }
}