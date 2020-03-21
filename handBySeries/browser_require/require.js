// /require\(\'(.*?)\'\)/g
function get(path) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", path)
        xhr.onload = function () {
            resolve(xhr.responseText);
        }
        xhr.onerror = function () {
            reject()
        }
        xhr.send();
    }) 
}
function require(path) {
    if (require.cache[path]) {
        return require.cache[path].module;
    }

    const code  = require.codeCache[path];

    const newFunction = new Function('module,exports', code);

    const module = {
        exports: {}
    }

    require.cache[path] = module;
    newFunction(module, module.exports);

    return module.exports;
}

require.cache = {}
require.codeCache = {}

require.start = (path) => {
    load(path).then(() => {
        require(path)
    })
}

function load(path) {
    return get(path).then(code => {
        require.codeCache[path] = code;

        const match = code.match(/require\(\'(.*?)\'\)/g)

        if (match) {
            const dep = match.map(item => item.match(/require\(\'(.*?)\'\)/)[1]);
            debugger;
            return Promise.all(dep.map(load))
        }
    })
}