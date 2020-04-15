function debounce(fn, wait, immediate) {
    let timer = null;

    return function(...args) {
        if (timer) clearTimeout(timer);
        let lock = false;
        if (immediate) {

            timer = setTimeout(()=>{
                lock = false;
            }, wait);

            if (!lock) {
                lock = true;
                return fn.apply(this, args);
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, wait)
        }

    }
}
