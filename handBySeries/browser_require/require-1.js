function get(path) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', path)
        xhr.onload = () => {
            resolve(xhr.responseText)
        }
        xhr.onerror = () => {
            reject()
        }
        xhr.send()
    })
}




function require(path) {
    if (require.cache[path]) {
        return require.cache[path].exports;
    }
    const code = require.codeCache[path];
    const codeFunction = new Function('module,exports', code);

    const module = {
        exports: {}
    }

    require.cache[path] = module;
    codeFunction(module, module.exports)

    return module.exports;
}

require.cache = {}
require.codeCache = {}

require.start = (path) => {
    load(path).then(() => {
        require(path);
    })
}

async function load(path) {
    const code = await get(path);
    require.codeCache[path] = code;

    const matches = code.match(/require\(\'(.*?)\'\)/g);

    if (matches) {
        const deps = matches.map(str => str.match(/require\(\'(.*?)\'\)/)[1]);

        await Promise.all(deps.map(load));
    }

    return
}

