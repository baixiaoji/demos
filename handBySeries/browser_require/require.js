
function get(path) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', path, false);
    xhr.send();

    return xhr.responseText;
}
function require(path) {
    if (require.cache[path]) {
        return require.cache[path].exports;
    }
    const code = get(path);

    const codeFunction = new Function('module,exports', code)

    const module = {
        exports: {}
    }

    require.cache[path] = module;
    codeFunction(module, module.exports);

    return module.exports;
}

require.cache = {}