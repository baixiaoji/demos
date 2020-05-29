// node 执行过程记得需要进到当前目录，因为 path的解析必须依赖当前目录，不然再根目录下找不到path的文件
const fs = require('fs');
global.require2 = function (path) {

    if (require2.cache[path]) {
        return require2.cache[path].exports;
    }
    const code = fs.readFileSync(path).toString();

    const codeFunction = new Function('module, exports', code);

    const module = {
        exports: {}
    }

    // 快速解决循环引用
    require2.cache[path] = module;
    
    codeFunction(module, module.exports);

    return module.exports;
}

require2.cache = {}

const a = require2('a.js');

console.log(a);
