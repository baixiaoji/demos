const fs = require('fs');

global.require2 = function(path) {
  if (require2.cache[path]) {
    return  require2.cache[path].exports
  }

  const code = fs.readFileSync(path).toString();
  const fn = new Function('module, exports', code);

  const module = {
    exports: {},
  }

  require2.cache[path] = module;

  fn(module, module.exports);

  return module.exports;
}

require2.cache = {}

const a = require2('a.js');

console.log(a);
