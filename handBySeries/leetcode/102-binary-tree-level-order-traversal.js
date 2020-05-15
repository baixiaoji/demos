// var levelOrder = function(root) {
//     const res = [];

//     function helper(node, depth) {
//         if (!node) return;

//         if (res[depth] === undefined) {
//             res[depth] = [];
//         }

//         res[depth].push(node.val);

//         helper(node.left, depth + 1);
//         helper(node.right, depth + 1);
//     }

//     helper(root, 0);
//     return res;
// }


var levelOrder = function(root) {
    const result = [];
    
    var level = -1;
    const stack = [];
    var pointer = root;
    
    while (stack.length > 0 || pointer !== null) {
        while (pointer) {
            level++;
            if (!result[level]) {
                result[level] = [pointer.val];
            } else {
                result[level].push(pointer.val);
            }

            stack.push({ pointer, level })
            pointer = pointer.left;
        }
        
        var { pointer, level } = stack.pop();
        pointer = pointer.right;
    }
    
    return result;
};


function array2Tree(arr, pos = 0) {
    if (arr[pos] == null) return null;

    const node = {
        val: arr[pos],
        left: array2Tree(arr, 2 * pos + 1),
        right: array2Tree(arr, 2 * pos + 2),
    }

    return node;
}

const arr = [3,9,20,null,null,15,7]
const tree = array2Tree(arr);

console.log(levelOrder(tree));

