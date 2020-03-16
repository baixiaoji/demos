const fs = require('fs');
// https://juejin.im/post/5dcff7fcf265da0baa463aab
global.require2 = function require2(path){
    if (require2.cache[path]){
        return require2.cache[path].exports;
    }
    const module = {
        exports: {},
    };
    const code = fs.readFileSync(path).toString();
    const functionCode = new Function('module, exports', code);
    // 提早添加，让循环依赖场景下，不会导致堆栈溢出
    require2.cache[path] = module;
    functionCode(module, module.exports);
    return module.exports;
}

require2.cache = {};

const a = require2('a.js');
// const b = require2('b.js');
// console.log(a);
// console.log(b);