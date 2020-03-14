const fs = require('fs');

global.require2 = function require2(path){
    if (require2.cache[path]){
        return require2.cache[path].exports;
    }
    const module = {
        exports: {},
    };
    const code = fs.readFileSync(path).toString();
    const functionCode = new Function('module, exports', code);
    
    require2.cache[path] = module;
    functionCode(module, module.exports);
    return module.exports;
}

require2.cache = {};

const a = require2('a.js');
// const b = require2('b.js');
// console.log(a);
// console.log(b);