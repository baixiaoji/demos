const fs = require('fs');

function require2(path) {
    const code = fs.readFileSync(path).toString();
    const functionCode = new Function('module, exports', code);
    const module = {
        exports: {},
    };
    functionCode(module, module.exports);
    return module.exports;
}

const a = require2('./a.js');
const b = require2('./b.js');
console.log(a);
console.log(b);