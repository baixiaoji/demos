const slice = Array.prototype.slice;
function _bind(asThis, ...rest) {
    const fn = this;
    if (typeof fn !== 'function') {
        throw  new Error('必须用函数调用');
    }

    const p = function() {
        const args = slice.call(arguments);

        return fn.apply(this instanceof p ? this : asThis, rest.concat(args));
    }
    p.prototype = fn.prototype;
    return p;
}

Function.prototype._bind = _bind;

exports._bind = _bind;