const fs = require('fs')
const path = require('path');

const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');


const code = fs.readFileSync(path.resolve(__dirname, './demo.js'), {encoding: 'utf-8'});

console.log(code);

const ast = esprima.parseModule(code);


let indent = 0;
function padding() {
  return " ".repeat(indent);
}

estraverse.traverse(ast, {
  enter(node) {
    //进入

    console.log(padding() + node.type + ' ' + node.name + "进入");
    if (node.type === "FunctionDeclaration") {
      node.id.name = "modidfyFnName";
    }
    indent += 2;
  },
  leave(node) {
    //离开
    indent -= 2;
    console.log(padding() + node.type  + ' ' + node.name + "退出");
  },
});

let result = escodegen.generate(ast);
console.log(result);